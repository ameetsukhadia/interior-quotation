-- 001_init.sql
create extension if not exists pgcrypto;
create or replace function set_updated_at() returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;
create or replace function is_admin(uid uuid) returns boolean language sql stable as $$ select exists (select 1 from public.users u where u.id = uid and u.role = 'admin'); $$;

create table if not exists public.users (
  id uuid primary key default auth.uid(),
  email text unique,
  name text,
  role text not null default 'customer' check (role in ('customer','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.material_tiers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  sort_order int not null default 0,
  is_active boolean not null default true
);
create unique index if not exists material_tiers_name_idx on public.material_tiers(lower(name));

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sku text unique,
  tier_id uuid not null references public.material_tiers(id) on delete restrict,
  unit text not null,
  base_price numeric(12,2) not null check (base_price >= 0),
  image_url text,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger products_set_updated_at before update on public.products for each row execute function set_updated_at();

create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.users(id) on delete cascade,
  status text not null default 'draft' check (status in ('draft','sent','accepted','rejected','expired')),
  subtotal numeric(12,2) not null default 0,
  tax_total numeric(12,2) not null default 0,
  discount_total numeric(12,2) not null default 0,
  grand_total numeric(12,2) not null default 0,
  currency char(3) not null default 'INR',
  valid_until date,
  notes text,
  public_ref text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger quotes_set_updated_at before update on public.quotes for each row execute function set_updated_at();

create table if not exists public.quote_items (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid not null references public.quotes(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  tier_snapshot jsonb,
  product_snapshot jsonb,
  quantity numeric(12,2) not null check (quantity >= 0),
  unit_price numeric(12,2) not null check (unit_price >= 0),
  line_total numeric(12,2) not null check (line_total >= 0)
);

create table if not exists public.settings (
  id uuid primary key default gen_random_uuid(),
  company_name text,
  company_address text,
  phone text,
  email text,
  logo_url text,
  tax_rate numeric(5,2) default 0,
  discount_rules jsonb,
  pdf_footer_text text,
  terms_conditions text
);

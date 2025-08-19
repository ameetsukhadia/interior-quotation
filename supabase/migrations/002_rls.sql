-- 002_rls.sql
alter table public.users enable row level security;
alter table public.material_tiers enable row level security;
alter table public.products enable row level security;
alter table public.quotes enable row level security;
alter table public.quote_items enable row level security;
alter table public.settings enable row level security;

create policy users_self_read on public.users for select using (id = auth.uid());
create policy users_self_update on public.users for update using (id = auth.uid());
create policy users_admin_read_all on public.users for select using (is_admin(auth.uid()));

create policy tiers_read_all_auth on public.material_tiers for select using (auth.role() = 'authenticated');
create policy tiers_admin_ins on public.material_tiers for insert with check (is_admin(auth.uid()));
create policy tiers_admin_upd on public.material_tiers for update using (is_admin(auth.uid())) with check (is_admin(auth.uid()));

create policy products_read_active on public.products for select using ((auth.role() = 'authenticated' and is_active = true) or is_admin(auth.uid()));
create policy products_admin_ins on public.products for insert with check (is_admin(auth.uid()));
create policy products_admin_upd on public.products for update using (is_admin(auth.uid())) with check (is_admin(auth.uid()));
create policy products_admin_del on public.products for delete using (is_admin(auth.uid()));

create policy quotes_self_select on public.quotes for select using (customer_id = auth.uid() or is_admin(auth.uid()));
create policy quotes_self_insert on public.quotes for insert with check (customer_id = auth.uid() or is_admin(auth.uid()));
create policy quotes_self_update on public.quotes for update using (customer_id = auth.uid() or is_admin(auth.uid())) with check (customer_id = auth.uid() or is_admin(auth.uid()));
create policy quotes_self_delete on public.quotes for delete using (customer_id = auth.uid() or is_admin(auth.uid()));

create policy qitems_self_select on public.quote_items for select using (exists (select 1 from public.quotes q where q.id = quote_id and (q.customer_id = auth.uid() or is_admin(auth.uid()))));
create policy qitems_self_insert on public.quote_items for insert with check (exists (select 1 from public.quotes q where q.id = quote_id and (q.customer_id = auth.uid() or is_admin(auth.uid()))));
create policy qitems_self_update on public.quote_items for update using (exists (select 1 from public.quotes q where q.id = quote_id and (q.customer_id = auth.uid() or is_admin(auth.uid())))) with check (exists (select 1 from public.quotes q where q.id = quote_id and (q.customer_id = auth.uid() or is_admin(auth.uid()))));
create policy qitems_self_delete on public.quote_items for delete using (exists (select 1 from public.quotes q where q.id = quote_id and (q.customer_id = auth.uid() or is_admin(auth.uid()))));

create policy settings_read_auth on public.settings for select using (auth.role() = 'authenticated' or is_admin(auth.uid()));
create policy settings_admin_update on public.settings for update using (is_admin(auth.uid())) with check (is_admin(auth.uid()));
create policy settings_admin_insert on public.settings for insert with check (is_admin(auth.uid()));

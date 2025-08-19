-- 003_seed_tiers.sql
insert into public.material_tiers (name, description, sort_order, is_active) values
('Premium','High-end materials & finishes',1,true),
('Average','Balanced quality and price',2,true),
('Low-cost','Budget-friendly essentials',3,true)
on conflict do nothing;

insert into public.settings (company_name, company_address, email, phone, tax_rate, pdf_footer_text)
values ('Your Interior Co.','123, Your Street, City','info@example.com','+91-90000-00000',18.00,'Thank you for considering us.')
on conflict do nothing;

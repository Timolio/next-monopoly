drop trigger if exists on_auth_user_created on auth.users;

drop function if exists public.handle_new_user();

drop table if exists public.users cascade;

create table public.users (
    id uuid references auth.users(id) on delete cascade,
    username text not null,
    email text not null unique,
    avatar_url text not null,
    primary key (id)
);


create or replace function public.handle_new_user()
returns trigger as $$
begin
    insert into public.users (id, username, avatar_url)
    values (
        new.id,
        new.raw_user_meta_data->>'name',
        new.email,
        new.raw_user_meta_data->>'avatar_url'
    );
    return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user();

alter table public.users enable row level security;

create policy "Users can update own profile" on public.users
  for update using (auth.uid() = id);

create policy "Anyone can view profiles" on public.users
  for select using (true);
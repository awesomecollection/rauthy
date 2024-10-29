# TODO List

## CURRENT WORK

- [x] migrate `api`
- [x] migrate `api_types`
- [x] migrate `bin`
- [x] migrate `common`
- [x] migrate `error`
- [x] migrate `middlewares`
- [ ] migrate `models` (below-mentioned migration/* and app_state missing)
- [x] migrate `notify`
- [x] migrate `schedulers`
- [x] migrate `service`

- migrate each model step by step
- create proper direct query for users in `src/schedulers/src/passwords.rs`
- `MIGRATE_DB_FROM` for Hiqlite -> implement backup restore from local fs in Hiqlite
- modules left for the end, after main tasks are finished:
    - `src/models/src/migration/mod.rs`
    - `src/models/src/migration/db_migrate.rs`
    - `src/models/src/app_state.rs`

### After finished Hiqlite migration

- check changed session invalidation functions
- fix `DbType::from_str`
- cleanup `DbPool` creation in `AppState`
- remove the `sqlite` feature from `sqlx` to really make sure nothing has been forgotten
- add an index (signature, created_at) to `jwks`

#### Update for the Changelog

- POST /clients does not return the created client anymore

## Documentation TODO

- `HealthResponse` response has been changed with Hiqlite -> breaking change

## Stage 1 - essentials

[x] finished

## Stage 2 - features - do before v1.0.0

- events view wide -> button height 30px -> error with overflow
- input validation in account view broken for first / last name -> backend requests 2 chars +
- find a nice way to simply always expose the swagger UI for rauthy admins only without config
  current issue: when the session cookie is a non-host cookie with path restriction -> not working
  probably move from `/docs/v1` to `/auth/v1/docs`
- prettify the UI
- update the book with all the new features
- maybe get a nicer logo

### `rauthy-client` TODO's

- when implementing userinfo lookup, add an fn to validate the `at_hash` as well

## Stage 3 - Possible nice to haves

- impl experimental `dilithium` alg for token signing to become quantum safe
- 'rauthy-migrate' project to help migrating to rauthy? probably when doing benchmarks anyway and use it
  for dummy data?
- custom event listener template to build own implementation? -> only if NATS will be implemented maybe?

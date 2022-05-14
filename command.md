3 Pilares de Angular

- Framework basado en componentes
- Contiene una variedad de librerias optimizadas para trabajar con angular Rxjs, Router
- Suite del desarrollador (testing)


# Creating new project
``` ng new spotify --routing --style=css ```

# Chamge port
``` ng s --port=4100 ```

# Creating network 
``` ng s --host=0.0.0.0 --port=4100 ```

# Creating modules
``` ng g module modules/Auth --routing ```

# Creating component
``` ng g c modules/auth/pages/LoginPage ```
``` ng g c shared/components/Sidebar ```
# Creating shared
``` ng g m shred/shared --flat ```

# Creating pipe
``` ng g p  shared/pipe/orderList ```

# Creating service
``` ng g s modules/auth/services/auth ```

# Creating guards
``` ng g guard core/guards/Session ```

# Creating interceptor
``` ng g interceptor core/interceptors/InjectionSession ```
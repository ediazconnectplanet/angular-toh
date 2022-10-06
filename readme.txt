-app
  
-shared
  -services
  -pipes
  -components
  -models

-modules
  -education
    -components
        -school
        -college
    -models
        -education.model.ts
    -services
        -education.service.ts

    -education.component.ts // this component should act like a container
    -education.component.html
    -education.component.css
    -education.module.ts        
    -education-routing.module.ts

  -transport
    -components
        -cycle
        -bike
    -models
        transport.model.ts
    -services
        transport.service.ts
        
    -transport.component.ts // this component should act like a container
    -transport.component.html
    -transport.component.css
    -transport.module.ts        
    -transport-routing.module.ts

-app.component.ts
-app.component.html
-app.component.css
-app.module.ts
-app-routing.module.ts
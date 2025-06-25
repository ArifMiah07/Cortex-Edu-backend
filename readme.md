# **Cortex Edu Backend**

cortex edu is a Learning Management (LMS)

```md
src/
├── app.ts
├── server.ts
├── config/
│   └── index.ts
├── controllers/
│   ├── auth.controller.ts
│   ├── user.controller.ts
│   ├── course.controller.ts
│   ├── module.controller.ts
│   └── lecture.controller.ts
├── models/
│   ├── user.model.ts
│   ├── course.model.ts
│   ├── module.model.ts
│   └── lecture.model.ts
├── routes/
│   ├── auth.routes.ts
│   ├── user.routes.ts
│   ├── course.routes.ts
│   ├── module.routes.ts
│   └── lecture.routes.ts
├── services/
│   ├── auth.service.ts
│   ├── user.service.ts
│   ├── course.service.ts
│   ├── module.service.ts
│   └── lecture.service.ts
├── validations/
│   ├── auth.validation.ts
│   ├── user.validation.ts
│   ├── course.validation.ts
│   ├── module.validation.ts
│   └── lecture.validation.ts
├── interfaces/
│   ├── user.interface.ts
│   ├── course.interface.ts
│   ├── module.interface.ts
│   └── lecture.interface.ts
├── middlewares/
│   ├── auth.middleware.ts
│   ├── role.middleware.ts
│   ├── validateRequest.ts
│   └── errorHandler.ts
├── utils/
│   ├── jwt.ts
│   └── response.ts
├── constants/
│   └── roles.ts
├── types/
│   └── global.d.ts

```
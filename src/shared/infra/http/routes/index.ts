import { Router } from 'express';
import Providers from '@modules/appointments/infra/http/routes/providers.routes';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import PasswordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();
routes.use('/appointments', appointmentsRouter);
routes.use('/providers', Providers);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', PasswordRouter);
routes.use('/profile', profileRouter);

export default routes;

import UserRouter from './user.route.js'
import ConversationRouter from './conversation.route.js'
import AuthRouter from './auth.route.js'

function route(app) {
  app.use('/api/auth', AuthRouter);
  app.use('/api/users', UserRouter);
  app.use('/api/conversation', ConversationRouter);
}

export default route;
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

// 设置基本的健康检查路由
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 预留其他API路由
// 当前项目主要使用客户端本地数据处理，API路由可根据需要扩展

export default handle(app);
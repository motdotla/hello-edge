export const config = {
  'runtime': 'edge'
};

export default function handler(req) {
  return Response.json({ location: process.env.HELLO });
}

export const config = {
  'runtime': 'edge'
};

export default function handler(req) {
  return Response.json({ location: process.env.NEXT_PUBLIC_EDGE_HELLO });
}

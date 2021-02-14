import application from '../lib/application.mjs';

export default function Page() {
  return <h1>Hello!</h1>;
}

export async function getServerSideProps({ query: request, req }) {
  const scope = await application.createScope(req);
  const usecase = scope.resolve('userView');
  const props = {
    request,
    response: await usecase.process(request),
    schema: await usecase.schema(request)
  };
  return { props };
}

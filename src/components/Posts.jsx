export default async function Posts() {
  const url = 'http://localhost:8080/posts';
  let posts = await fetch(url, { next: { revalidate: 1 } }).then((json) =>
    json.json()
  );

  return (
    <section className='posts'>
      {posts && posts.map((p) => <div key={p.id}>{p.title}</div>)}
    </section>
  );
}

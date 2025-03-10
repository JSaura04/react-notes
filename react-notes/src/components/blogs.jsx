import styles from '../assets/blogs.module.css';

function blogs() {

    const b1 = "Hola";
    const b2 = "Mundo";


  return (
    <>
    <div>
      <h1>Blogs</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum minus beatae ipsam repudiandae nihil dolor et dolorum debitis obcaecati magnam ratione, alias veniam libero sapiente, assumenda dolores harum amet.</p>
    </div>
    <main>
        <section className={styles.blog}>
            <h2>Blog 1</h2>
            <p>{b1}</p>
        </section>
        <section className={styles.blog}>
            <h2>Blog 2</h2>
            <p>{b2}</p>
        </section>
    </main>
    </>
   
  );
}  

export default blogs;
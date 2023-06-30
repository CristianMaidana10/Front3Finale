// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
// import { getComicById } from '../api/marvelAPI';
// import Link from 'next/link';

// const ComicPage = () => {
//     const router = useRouter();
//     const { id } = router.query;
//     const [comic, setComic] = useState(null);

//     useEffect(() => {
//         const fetchComic = async () => {
//             try {
//                 const comicData = await getComicById(id);
//                 setComic(comicData);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         if (id) {
//             fetchComic();
//         }
//     }, [id]);

//     const renderCharacters = () => {
//         if (comic?.characters) {
//             return comic.characters.map((character) => (
//                 <li key={character.id}>
//                     <Link href={`/characters/${character.id}`}>
//                         <a>{character.name}</a>
//                     </Link>
//                 </li>
//             ));
//         }

//         return null;
//     };

//     return (
//         <>
//             <Head>
//                 <title>DH MARVEL - Comic Detail</title>
//                 <meta name='description' content='Comic detail page' />
//             </Head>
//             <BodySingle>
//                 {comic && (
//                     <div className='comic-detail'>
//                         <h2>{comic.title}</h2>
//                         <img
//                             src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
//                             alt={comic.title}
//                         />
//                         <p>{comic.description}</p>
//                         <p>Price: {comic.prices[0]?.price}</p>
//                         <p>Previous Price: {comic.prices[1]?.price}</p>
//                         <button disabled={!comic.stock}>{comic.stock ? 'Buy' : 'Out of Stock'}</button>
//                         <ul>
//                             {renderCharacters()}
//                         </ul>
//                     </div>
//                 )}
//             </BodySingle>
//         </>
//     );
// };

// export default ComicPage;
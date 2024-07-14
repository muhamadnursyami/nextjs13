// Untuk mengambil paramter url pada slug yang di kirim kan
type DetailProductPageProps = {params: {slug: string}};
export default function ProductDetailPage ( props: DetailProductPageProps){
    const {params} = props;
    console.log(params);
    return(
        <>
        <h1>Halaman Product Detail Page</h1>
        <h2>{params.slug}</h2>
        </>
    )
}
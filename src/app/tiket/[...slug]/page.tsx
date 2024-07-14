// Untuk mengambil paramter  url sebanyaka apapaun pada slug yang di kirim kan 
// tipe data slug yaitu string arrya
type DetailTiketPageProps = {params: {slug: string[]}};
export default function TiketDetailPage ( props: DetailTiketPageProps){
    const {params} = props;
    console.log(params);
    console.log(params);
    return(
        <>
        <h1>Halaman Tiket Detail Page</h1>
        <h2>Tiket untuk : {params.slug[0]}</h2>
        <h2>Tiket untuk :{params.slug[1]}</h2>
        </>
    )
}
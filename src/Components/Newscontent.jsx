import React, { useCallback, useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import image from '../assets/newsimage.jpg'

function Newscontent({category,country}) {
    const apikey = process.env.REACT_APP_ACCESS_KEY
    const [news, setnews] = useState([])
    let displaycountry=country
    let displaycategory=category
    let[buttonvisible,setbuttonvisible]=useState(false)
    let[pagesize,setpagesize]=useState(20)

    let fetchnews=useCallback(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${displaycountry}&category=${displaycategory}&pageSize=${pagesize}&apiKey=${apikey}`
        fetch(url).then(response => response.json()).then(data => setnews(data.articles))
        console.log(news.length)
     },[apikey,news,displaycategory,displaycountry,pagesize])

    useEffect(() => {
        fetchnews();
        setbuttonvisible(true);
    },[fetchnews,news.length,pagesize.setbuttonvisible])


    function shownextnews(){
        pagesize=setpagesize(pagesize+4);
        fetchnews();
        if(news.length===pagesize){
            setbuttonvisible(false)
        }

}
    return (
        <div>
            <section className='sec pt-5'>
                <h3 className='text-center mt-4'>Latest <span className='bg-red badge bg-light'>News</span></h3>
                <div className="container">
                    <div className="row">
                        {news ? news.map((data, index) => (
                             data.content !== "[Removed]" ? (
                            <div key={index} className="col-sm-12 col-md-6 col-lg-3 mb-3 mt-4 text-center">
                                <Card style={{ width:"100%",height:"30rem"}} className=' bg-dark text-light'>
                                    <Card.Img variant="top" src={data.urlToImage ? data.urlToImage :image} style={{height:"200px",width:"100%"}} />
                                    <Card.Body>
                                        <Card.Title>{data.title.slice(0,50)}</Card.Title>
                                        <Card.Text>
                                            {data.description?data.description.slice(0,120):null}
                                        </Card.Text>
                                        <Button variant="primary" href={data.url}>Read More</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                             ):null
                        )):null}
                    </div>
                    <div className='text-center'>
                    {buttonvisible && news.length>0 && news.length===pagesize ? <button onClick={shownextnews} className='mt-3 btn btn-dark'>Next News</button>:null}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Newscontent;

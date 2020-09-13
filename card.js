import Link from 'next/link'
const Card= () => {
    return (
        
        <>
        <div class="card">
            <img src="images/card.png" />
            <h4>FIRST BLOG TITL…</h4>
            <small>By FikraSpace</small>
            <div class="card-footer">
              <Link href="artical">
              
                <b> Reade article</b>
              </Link>
              <span>June 19, 2020</span>
            </div>
          </div>
          </>
          )}
        export default Card
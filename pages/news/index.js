import Link  from "next/link";
import {Fragment} from "react";


function NewsPage() {

    return (
      <Fragment>
        <h1>The News page</h1>
        <ul>
          
          <li>
            <Link href="/news/news1">News 1</Link>
          </li>

          <li>
            <Link href="/news/news2">News 2</Link>
          </li>

          <li>
            <Link href="/news/news3">News 3</Link>
          </li>

        </ul>
      </Fragment>
    )
}
export default NewsPage;
import React from 'react'
import "./outbookscomponent.css"

const books = [
  {
    title: "Hot Nights Cold Days",
    author: "Donald Ennis",
    releaseDate: "6-July-2023",
    genre: "Novel",
    imageUrl: "./images/ob7.jpg",
    link: "https://www.amazon.com/NIGHTS-COLD-DAYS-Donald-Ennis-ebook/dp/B0CBD9GBVB/ref=sr_1_11?crid=3M5OVPIYHUQKL&dib=eyJ2IjoiMSJ9.cmDcZtFzA7JHxBqp6fcS8cqfbP2rZsdXEcu1cIk6CkYG6u-nRW-mQ4qzqg5XH3ITcC4NFz4LTmXRKv4WnmJprGb2BVyB8UP4OFhpJGlogID3-VSihSPXcMmFMtmE5Vw58HV6CXXxh_AW3UTvrV9dxbrGlUMgc5-i7nK3mlx9OX21JJVzpoJQ0Lba2mrmuvAiqAmxLW93qUKtO6PX-Y4c3aTCYwlfd6h4vFgtUE2mKuM.ZuR74N6R06s5TR0kmkeLvFQvCbud53MQkma470K7h2Y&dib_tag=se&keywords=Donald+Ennis&qid=1714501120&s=books&sprefix=donald+ennis%2Cstripbooks%2C290&sr=1-11",
  },
  {
    title: "The Thoughtful Chef: How the Connection of Spirituality, Great Energy and Good Clean Organic Food Become One",
    author: "Lisa Stalvey Coady",
    releaseDate: "4-March-2022",
    genre: "Cooking",
    imageUrl: "./images/ob18.jpg",
    link: "https://www.amazon.com/Thoughtful-Chef-Connection-Spirituality-Organic-ebook/dp/B09TX852PG/ref=sr_1_1?crid=25RL5U1X67PAX&dib=eyJ2IjoiMSJ9.gB-3ZmTJCcGFCk_diXU4t86BnKgmvoNJFGMTFrwWxQQ.yejOr8A0O6-oidGTS1MGUQW7WqDXRN-1qx6oWvvla7o&dib_tag=se&keywords=lisa+stalvey&qid=1714505433&s=digital-text&sprefix=lisa+stalvey%2Cdigital-text%2C708&sr=1-1", // Example Amazon URL
  },
  {
    title: "One Rowing Stroke at a Time - Surviving Stage 3 Breast Cancer for 20-Years",
    author: "Beth Gardner",
    releaseDate: "24-Feb-2022",
    genre: "Biography",
    imageUrl: "./images/ob11.jpg",
    link: "https://www.amazon.com/One-Rowing-Stroke-Time-Surviving-ebook/dp/B09TGC9M29/ref=sr_1_3?crid=1Y0LRQ1E9UKGO&dib=eyJ2IjoiMSJ9.AyfccALtMMf8kkqfSpD9XLNE0-yJrYaNpSHsWCKdQ8Txl5vbOcHnTifsHv8KXNFcHBoY_yU871q4p610RnCFCWkIcKUF7EDGF97M4R6tHOgzv0kTrrZFPV6_lz4K65VY2nM6V3AkpydysKPUsqleYSMig-9BOfDazQJ2BHUzSMEpePS8OSt7ufh7mJ_0enja_iCaceY2iJk_oSc6bfD9-YsJREpW_5G37dhjjzL8qvI.EHAjr4Tmifd86ygPBA6XEKAo65EBbLPYWiSnR3QsZmk&dib_tag=se&keywords=beth+gardner&qid=1714501348&s=books&sprefix=beth+gardner%2Cstripbooks%2C374&sr=1-3", // Example Amazon URL

  },
  {
    title: "Fern Valley Ventures: Volume 1",
    author: "Elizabeth Dooley",
    releaseDate: "5-July-2022",
    genre: "FICTION-ACTION",
    imageUrl: "./images/ob4.jpg",
    link: "https://www.amazon.com/Fern-Valley-Ventures-Elizabeth-Dooley-ebook/dp/B0B5YJTZH6/ref=sr_1_5?crid=2NQ39G7M91QNV&dib=eyJ2IjoiMSJ9.fFD9cRtzsYylT-2doFNI8d0vVKU99c7HstUat3u5DDiz0r7T6yoUt11ZVKcvsFLf9hzLB2UmPFov5gReiDdR8MuSRCZWzzoZAvVASELpl41jNdDy-3NYYkOBJ3sLQy4E2V54uX7qyo_8CtDG0Qrn7KeoDjLCgQCI7jlTgPZq_GesyW5QGyYWe5rJcj2JYCMrrsr03Ubh31kUsZPNDY8k8dvcpDuvKNbMZH7TsP8XHUs.GhnSu3NY_4EWYZcxyIY8ZdInNbx2wIOd4troHKfIu20&dib_tag=se&keywords=Elizabeth+Dooley&qid=1714501741&s=books&sprefix=elizabeth+dooley%2Cstripbooks%2C341&sr=1-5", // Example Amazon URL

  },
  {
    title: "Singing the Winn/Dixie Blues and other Short Stories",
    author: "Kenneth G Allen Jr.",
    releaseDate: "1-Aug-2022",
    genre: "CHILDREN'S FICTION",
    imageUrl: "./images/ob14.jpg",
    link: "https://www.amazon.com/Singing-Dixie-Blues-other-Stories-ebook/dp/B0B5VKDYFP/ref=sr_1_1?crid=2G6VL3G6R7Z0A&dib=eyJ2IjoiMSJ9.fSyE3dMkOy35N3mmclJwOb1mnGiVtXdIXILOKtcB04Jgpzt9HOhcT39JrCDM7HOOEbHyk3pAKCnhpNT_nJ58eyPY5TMUUSRUueFZLg-sguUwwb1pw0zha7oHXVoTpTrPhJRz4XLBf0_mXBzBv5RzKcdFk6p0GC2a5Ypon_PKwDtkr85RLB0_UmNISAuT-YR1kVamo1QUTaJAolAkMb29tv-lsZTHJNUe6v0oy5HOjII.lhMBnBaddHlGfRofFle_biDRMJTA5SMmsi6IB_6zqtg&dib_tag=se&keywords=Singing+The+Winn%2FDixie+Blues+and+Other+Short+Stories.&qid=1714502052&s=books&sprefix=singing+the+winn%2Fdixie+blues+and+other+short+stories.%2Cstripbooks%2C273&sr=1-1", // Example Amazon URL

  },
  {
    title: "Language of a Silence",
    author: "Ana Jorda",
    releaseDate: "18-March-2022",
    genre: "POETRY",
    imageUrl: "./images/ob8.jpg",
    link: "https://www.amazon.com/Language-Silence-Ana-Jorda-ebook/dp/B09VYPSFN2/ref=sr_1_1?crid=2C7OWVV1AS41C&dib=eyJ2IjoiMSJ9.a225i9iEloI0LfPfhJvpaVLoiEibCY4Hy7DExIW4Aw8bJokI0HosB3qj9clcW3MBX9E0okcbLsK8Fg66i_JytvBeJmrbZdM5XyGyKelXee9eDyU9ImTDweN3KBpXu2f05ypaKZIH195ePAANn7Y4AfxnvnmtR92-EDUjiy_R-Cq4Eck_F_LYFwlK5z-afq-WlkX7X_7VeBsDeGtrUq3rrPwv7HUBNYZJHd_X4zjxCNg.wtRPX8vcXZIxzJMgQ9jqb9a2AzPCGKgLXURv0ciRIVE&dib_tag=se&keywords=Ana+Jord%C3%A1&qid=1714502176&s=books&sprefix=ana+jord%C3%A1+%2Cstripbooks%2C993&sr=1-1", // Example Amazon URL

  },
  {
    title: "EATERS DIGEST: The Care and Feeding of Your Microbiome",
    author: "Andy Dyer",
    releaseDate: "20-May-2022",
    genre: "Nutrition",
    imageUrl: "./images/ob2.jpg",
    link: "https://www.amazon.com/EATERS-DIGEST-Care-Feeding-Microbiome/dp/1958324744/ref=sr_1_1?crid=3NMOSNMYF4IHB&dib=eyJ2IjoiMSJ9.gYvvhyCqTF2K8Om8ZIx83sabIm0I1xxz5tAQCj0xkaPpDUPmYNiJjFCaf_Dl5-D4yn6DqXvzV_AF1h1rtjtIYEMTtBYMBzUYqR08chBJiszagIMKDZQdH7EOQ6ODMuj3ihkY-jYZGSBYQiWtSZMaJRW1tD4OFW7lMubWAXUa650cK9wrJe0-m65-AJOCpxkxnXJXGk-_beOKeIKdS06_8is93AXLAx0AjJclk6fmGJs.L0Esp9DdSgPtgXQ9oe_i6t31JNImNSxjLagPzszewSU&dib_tag=se&keywords=Andy+Dyer&qid=1714502649&s=books&sprefix=andy+dyer%2Cstripbooks%2C814&sr=1-1", // Example Amazon URL

  },
  {
    title: "HIS BOOK: YOUR CHAPTER",
    author: "Elizabeth Dooley",
    releaseDate: "31-May-2023",
    genre: "SPIRITUALITY",
    imageUrl: "./images/ob6.jpg",
    link: "https://www.amazon.com/HIS-BOOK-Marshall-R-Clayton-ebook/dp/B0C6V6RS28/ref=sr_1_1?crid=BXPHB03O5RAS&dib=eyJ2IjoiMSJ9.zEkqdZl2_M-Z5WhnUV0fUVBTKiWhVHTFumELUEB5Dpc.r0cP_oj9IY-sdWmOFNoDKI6rsvVJBbplI3P9y-daXBc&dib_tag=se&keywords=His+Book%2FYour+Chapter+by+Marshall+Clayton&qid=1714502868&s=books&sprefix=his+book%2Fyour+chapter+by+marshall+clayton%2Cstripbooks%2C369&sr=1-1", // Example Amazon URL

  },
  {
    title: "Fresh Start Journal",
    author: "Stacey Stanciu",
    releaseDate: "2-Mar-2023",
    genre: "Education",
    imageUrl: "./images/ob5.jpg",
    link: "https://www.amazon.com/Fresh-Start-Journal-Stacey-Stanciu/dp/1960757164/ref=sr_1_1?crid=BUK6A4XPECGX&dib=eyJ2IjoiMSJ9.tQqU8HUyosudENI9GydgtowizqLlqIDhvahGsA7xNSGRdqiehtDPXbCWpfIOBujSb_LASPdtyCcUrEnsd_FOzF1oD1ENFzTQJoWsdRKE6ktCGBA20kiQ6HAo0TUYvTXZEP_hNG89Yx1gzsS7CrzVq7QUAq8-iXH7B_pD0X9OO6Ol8K1KH7o5RuPq9cXXnsEQaNsIstjt7PMMg5-43lhhaJp0iA9tHbUI2yw2gHQteA4.gX5Y0gkKtVJ_z2ZtY1zhMJqwaLywZXeA-6C7C43r08Q&dib_tag=se&keywords=fresh+start+journal&qid=1714503034&s=books&sprefix=Fresh+Start+Journal%2Cstripbooks%2C260&sr=1-1", // Example Amazon URL

  },
  {
    title: "Saving Sandy",
    author: "Diana B. Mahoney",
    releaseDate: "12-April-2023",
    genre: "Pets",
    imageUrl: "./images/ob13.jpg",
    link: "https://www.amazon.com/Saving-Sandy-Diana-B-Mahoney/dp/1961186039/ref=sr_1_1?crid=3UUYJO5N3ZR1G&dib=eyJ2IjoiMSJ9.dkK3TaHIc2ItA1jqIv-MSDBrBmWxQ38ifMKxyJHnVYP5KyQQ0c3HGFGf7_D8RRXzBeYYKWdvxPVUm3VOwoJy_wTGFQgphWEoHC15QhLIW5RzaB4ltxiv4XcO19JeyGvsocBwIDQIIwy4pLRrARcke-vk54p59CYT-jsznJLM6xa9w3-WJJiTfoLL6cQWgA895kai9wAdGU7j8pQs9-CJdpWWaF2L1DhMOi_uvWz0pXU.Ul5zFLtdlGoBZ6MpGglisEAzohVGWKR4Sd5ihj3Fz7c&dib_tag=se&keywords=Saving+Sandy&qid=1714503261&s=books&sprefix=saving+sandy%2Cstripbooks%2C263&sr=1-1", // Example Amazon URL

  },
  {
    title: "The New Covenant Psalm",
    author: "Ken Stewart D. Min.",
    releaseDate: "29-May-2023",
    genre: "Religion",
    imageUrl: "./images/ob1.jpg",
    link: "https://www.amazon.com/New-Covenant-Psalm-Stewart-Min/dp/1961186659/ref=sr_1_1?crid=3KW3JWZ3V2ZRU&dib=eyJ2IjoiMSJ9.KUSQS08PyGCRKx1gBiQ6-OFEdpGDnwrnMm9HVBfbSgQxCUCaK4Z_zM3hOwoDxmNgn_C8q8_OTkXa4DrMCCGMpgdilD3R7Ah_sdtJsXeKusQQkwJfPlLmOl8G57R6myQoNyo3uFmaGEgTia6zI78-h-vfcUkL8rd2Y39rVgwRMR3p-EkU5cOZyLtDMhWFwDbxmPZVOwhVhTbLNW2_0cWhB-w5cUkEjRN09yPNy-E2ghs.gtb3LrvjgjtLEhuwY4x8LlOiRmIGpOD_rQqDGX0SlpE&dib_tag=se&keywords=the+new+covenant+psalm&qid=1714503388&s=books&sprefix=The+New+Covenant+Psalm%2Cstripbooks%2C267&sr=1-1", // Example Amazon URL

  },
  {
    title: "The Chronicles of a Traveling Renegade: Book 1",
    author: "Carrie Casal",
    releaseDate: "19-Apr-2023",
    genre: "Biography",
    imageUrl: "./images/ob16.jpg",
    link: "https://www.amazon.com/Chronicles-Traveling-Renegade-Book/dp/B0C2RJT8T4/ref=sr_1_1?crid=1KABMXIFVJ32N&dib=eyJ2IjoiMSJ9.dKscvP0xdBidwap8R8hWxRT3qm4ToizxyEktI1eTVK7Y9N8BvElFLE0s8uG88ij6K9qPQNRo9kXzFkfJs5NF8re-Wdeq24KaZDmlq2f2OrZ5DLKedy-E9s3wbwBJ143pFENsasJJm0YoRhgf5A3ZUNk1fg3vpGSLqdeDi7UQWsNm3NJsKdLhW8P9Oa_57koLBDhNTezyQ9M0UQhMBDs9QAgjp2JLQVE9VDWZvmAo9GY.Aff5foNBbMmSKG5cuB4cLLUKkwSg4FSk_ocOVwcbj0k&dib_tag=se&keywords=The+Chronicles+of+a+Traveling+Renegade%3A+Book+1&qid=1714503509&s=books&sprefix=the+chronicles+of+a+traveling+renegade+book+1+%2Cstripbooks%2C258&sr=1-1", // Example Amazon URL

  },
  {
    title: "Rey's Transcontinental Tale: Panama to the United States",
    author: "Reinaldo A. Whyte",
    releaseDate: "1-Dec-2023",
    genre: "Education",
    imageUrl: "./images/ob12.jpg",
    link: "https://www.amazon.com/REYS-TRANSCONTINENTAL-TALE-PANAMA-UNITED-ebook/dp/B0CPCK9LKM/ref=sr_1_1?crid=37ASIK3R97N9L&dib=eyJ2IjoiMSJ9.9E7R13GW4mtGk9jJb0zt38Mj-Z3fYQCmV2W0Vy1gfc_TKK1JWs-BZKovYn7g1MprKz-RQoLvAaSXvwZeynC3_xF_s-N-pZLMyJ5vKtJ9mrtZvUAh1mk3s2qJsIIBrlUlSRM3d3sRB3e7sCudxqdbE9n6damBLsbSLs0McB-tyD-6B6XKk6dzE_MhLS7IErEPeKoMB2U9LkILHXYBEN3-3dEIvcSbiOfN0S-OBEX5F7k.ftOz_FKXcOT8ZUV6qO67b2d_60DzmCLXPSLVfGQxFRA&dib_tag=se&keywords=Rey%27s+Transcontinental+Tale%3A+Panama+to+the+United+States&qid=1714503876&s=books&sprefix=rey%27s+transcontinental+tale+panama+to+the+united+states%2Cstripbooks%2C300&sr=1-1", // Example Amazon URL

  },
  {
    title: "My Grandma is the Greatest",
    author: "Millie Quinn",
    releaseDate: "18-Aug-2023",
    genre: "CHILDREN'S FICTION",
    imageUrl: "./images/ob9.jpg",
    link: "https://www.amazon.com/My-Grandma-Greatest-Millie-Quinn-ebook/dp/B0CG3M65TY/ref=sr_1_3?crid=2KPGUIERKY0ZL&dib=eyJ2IjoiMSJ9.LH6FGLZ54S_mPlKo_dQIV7mGTRjmDhUQdYuA_8skrAkARDTFDQzE3AC1y6GOMChGt6Z8lNCHL1EB74eRi54P23-cPDICwQMmojKNj-Ikef_N2VQ9vMzKrbo6CzPrwP5ued7v29ubRh95zeKFw5cswdAoHbf3X2HNULAja1yJu6d9HBb1o6RnWZ6G9b4TfsyK7Uxnq_q_DW-0LhxeMiakSas-goLw2zCWXwQB4mzF5GA.QO4JejCiaiDsl1oqkfMguHhST3-1TnsMtUQ2j-Puu2k&dib_tag=se&keywords=My+Grandma+is+the+greatest&qid=1714504066&s=books&sprefix=my+grandma+is+the+greatest%2Cstripbooks%2C273&sr=1-3", // Example Amazon URL

  },
  {
    title: "THE ADVENTURES OF PAUPACKAN JACK: Paupackan Jack and the Lost Love",
    author: "John Deckop",
    releaseDate: "18-Mar-2024",
    genre: "CHILDREN'S FICTION",
    imageUrl: "./images/ob15.jpg",
    link: "https://www.amazon.com/ADVENTURES-PAUPACKAN-JACK-Paupackan-Jack/dp/1963878361", // Example Amazon URL

  },
  {
    title: "Adventures in Serendipity: Acceptance & Hope",
    author: "M. Erin Earlson",
    releaseDate: "15-Mar-2024",
    genre: "FICTION ROMANCE",
    imageUrl: "./images/ob10.jpg",
    link: "https://www.amazon.com/Adventures-Serendipity-Acceptance-Erin-Earlson/dp/1963878329", // Example Amazon URL

  },
  {
    title: "The Dundas Chronicles: Memoir of a Young Boy Growing Up in the Valley Town",
    author: "Allan Duffin",
    releaseDate: "11-Dec-2023",
    genre: "Memoir",
    imageUrl: "./images/ob17.jpg",
    link: "https://www.amazon.com/Dundas-Chronicles-Memoir-Growing-Valley/dp/1962893928", // Example Amazon URL

  },
  {
    title: "Virtual 10-Week Transformation: Becoming Your Best You",
    author: "Nick Carrier",
    releaseDate: "4-Mar-2024",
    genre: "HEALTH",
    imageUrl: "./images/ob20.jpg",
    link: "https://www.amazon.com/Virtual-10-Week-Transformation-Becoming-Your-ebook/dp/B0CX79XBT5", // Example Amazon URL

  },
  {
    title: "Faith of a Line Cook: The Gospel of Hope",
    author: "Brian Ingram",
    releaseDate: "28-Nov-2023",
    genre: "BIOGRAPHY",
    imageUrl: "./images/ob3.jpg",
    link: "https://www.amazon.com/Faith-Line-Cook-Gospel-Hope/dp/1962893537/ref=sr_1_1?crid=137SU6EMT9XQ3&dib=eyJ2IjoiMSJ9.AAtPqtbWH4zTnDXZRGTbXAdskowlPWCLCcqumUObXEoQl9AFEPybcoBg-fWY4X1WXlq6XPvLpL54TfjW02IezQ42Y7YivQhMbqmqfKZ7x5YPIasTC4OaDkmWjZi20wx8kdP6MMW3pZmk3CnixBpvEi-3Gmg4UTw2rVMa9SXkNm44W58NrJgQTavNtAbieBcaasCPZtakNLCgTyYyq_wa5OZsWBErKimAKIpIomMQ5I4.h6bbjUW_MMNgyvG2eK6YKJpXZan3QahTQb00wrzNRrg&dib_tag=se&keywords=brian+ingram&qid=1714505963&sprefix=brian+ingram%2Caps%2C347&sr=8-1", // Example Amazon URL

  },
  {
    title: "THE VELVET TOUCH: DEFUSING THE POPULATION BOMB",
    author: "Kenneth Deboer",
    releaseDate: "18-Feb-2024",
    genre: "NATURE",
    imageUrl: "./images/ob19.jpg",
    link: "https://www.amazon.com/VELVET-TOUCH-DEFUSING-POPULATION-BOMB-ebook/dp/B0CVZF5YGB/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.zbiVeyyc30tWxYJUq54P50pNdjBRjLKR0S9ueOUdKdJ5F_dlu7KrGVdQiMNCyqxdS5A_whUtunzaPBfRXtD8KQg-y7HK0mgqkZ4k8mfP0kxbspnGHPkBjSncET5fkI71Ar7gaocP59C6EgwubF3AdhQCXgxlQgBpjheJ0TZpvVsOVBmT9TUEhGhGAH0itJ42imrarcBY-TxD_yiKyy5oXzxi9Y-ywvxEnGnaa7436sQ.gbqzraegodUU1H7GD-sUjnWsMoUFiR-DmLCcK92rcQs&qid=1714506061&sr=8-7", // Example Amazon URL

  },
];


export default function Ourbookscomponents() {
  return (
    <>

      <div className="book-grid container">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.imageUrl} alt={book.title} className="book-image" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <p className="book-info">Released: {book.releaseDate}</p>
            <p className="book-info">Genre: {book.genre}</p>
            <a href={book.link} className="buy-button" target="_blank" rel="noopener noreferrer">
              BUY AT AMAZON
            </a>
          </div>
        ))}
      </div>

    </>
  )
}

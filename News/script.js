const fetchNews = async (page) => {

    console.log("Fetching news....");

    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'from=2024-07-10&' +
        'pageSize =10&' +
        'page=' + page +
        'sortBy=popularity&' +
        'apiKey=d59ad112e4284ab9a8948215f9fd3c12';

    var req = new Request(url);

    // let a = await fetch(req)
    // let response = await a.json()
    // console.log(JSON.stringify(response))
       

    let response = {
        "status": "ok",
        "totalResults": 37,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "mlive.com"
                },
                "author": "Matt Durr | mattdurr@mlive.com",
                "title": "Target announces it will no longer accept a once popular payment option - MLive.com",
                "description": "The retailer announced the change will go into effect on July 15.",
                "url": "https://www.mlive.com/news/2024/07/target-announces-it-will-no-longer-accept-a-once-popular-payment-option.html",
                "urlToImage": "https://www.mlive.com/resizer/v2/XOKODHF67VEQ5KCP35ZVIQREDQ.jpg?auth=98e442334b9ad72ae2c0a70c8fca51a1535e9b1c74a2d830c037b9e290e25ca1&width=1280&quality=90",
                "publishedAt": "2024-07-09T16:39:00Z",
                "content": "Target shoppers who wish to pay with a personal check only have a few more days to do so as the national retailer has announced plans to stop accepting the once popular payment option. According to C… [+662 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "New York Post"
                },
                "author": "Eric Todisco",
                "title": "Gypsy Rose Blanchard is pregnant, expecting first child with Ken Urker: ‘Not planned’ - New York Post ",
                "description": "Gypsy Rose Blanchard and her boyfriend Ken Urker are expecting their first child together in January 2025.",
                "url": "https://nypost.com/2024/07/09/entertainment/gypsy-rose-blanchard-pregnant-expecting-baby-with-ken-urker/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/07/85174372.jpg?quality=75&strip=all&w=1024",
                "publishedAt": "2024-07-09T16:39:00Z",
                "content": "Gypsy Rose Blanchard is pregnant!\r\nThe 32-year-old announced she is expecting her first child with boyfriend Ken Urker, 31, on Tuesday. \r\nBlanchard shared the special news on Instagram and in a YouTu… [+4027 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Financial Times"
                },
                "author": null,
                "title": "US Federal Reserve chair Jay Powell hails ‘considerable progress’ in tackling inflation - Financial Times",
                "description": "Central bank underscores that next US interest rate move is likely to be a cut",
                "url": "https://www.ft.com/content/07905699-f937-4400-9d8c-fdb2e83890d1",
                "urlToImage": null,
                "publishedAt": "2024-07-09T16:21:01Z",
                "content": "Then $75 per month.Complete digital access to quality FT journalism on any device. Cancel anytime during your trial."
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": "ESPN",
                "title": "Dak says 'absolutely nothing' wrong with ankle - ESPN",
                "description": null,
                "url": "https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vd3d3LmVzcG4uY29tL25mbC9zdG9yeS9fL2lkLzQwNTI2MDAyL2Nvd2JveXMtZGFrLXByZXNjb3R0LXdhbGtpbmctYm9vdC1wcmVjYXV0aW9uYXJ5LWRvaW5nLWdyZWF00gEA?oc=5",
                "urlToImage": null,
                "publishedAt": "2024-07-09T16:19:00Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "1970-01-01T00:00:00Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "WMUR Manchester"
                },
                "author": "Kirk Enstrom",
                "title": "Measles case linked to international traveler confirmed in New Hampshire resident - WMUR Manchester",
                "description": "A case of measles has been confirmed in a New Hampshire resident, and health officials said it was linked to an international traveler who visited the state in June.",
                "url": "https://www.wmur.com/article/measles-new-hampshire-resident-7924/61545320",
                "urlToImage": "https://kubrick.htvapps.com/vidthumb/5030b254-fb67-4c45-ba66-d8244d0a1c16/37fda5a7-c8ce-4887-accb-17ad1ef45f7e.jpg?crop=0.788xw:0.788xh;0.103xw,0&resize=1200:*",
                "publishedAt": "2024-07-09T16:08:00Z",
                "content": "MANCHESTER, N.H. —A case of measles has been confirmed in a New Hampshire resident, and health officials said it was linked to an international traveler who visited the state in June.\r\nThe Department… [+3408 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Elizabeth Wolfe",
                "title": "Beryl leaves millions of Texans without power as dangerous heat descends on the region - CNN",
                "description": "Restoring power to millions of Texans slammed by the deadly and destructive storm Beryl could take days or even weeks, posing a dangerous scenario for residents who will not have air conditioning as sweltering heat settles over the state.",
                "url": "https://www.cnn.com/2024/07/09/weather/beryl-storm-texas-power-outages-heat/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2161220114.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2024-07-09T16:05:00Z",
                "content": "Restoring power to millions of Texans slammed by the deadly and destructive storm Beryl could take days or even weeks, posing a dangerous scenario for residents who will not have air conditioning as … [+6013 chars]"
            },
            {
                "source": {
                    "id": "cbs-news",
                    "name": "CBS News"
                },
                "author": "Megan Cerullo",
                "title": "New cyberattack targets iPhone Apple IDs. Here's how to protect your data. - CBS News",
                "description": "Cybercriminals are using \"smishing\" scams to get iPhone users to reveal their Apple IDs, Symantec warns. Here's what to watch out for.",
                "url": "https://www.cbsnews.com/news/cyberattack-iphone-apple-ids-how-to-protect-your-data/",
                "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/07/08/1ca1b7c1-00c7-4e35-a32b-75cfe06ac332/thumbnail/1200x630/e19a2e1692eaa3b918db9630904c7d53/gettyimages-1773274748.jpg?v=2287029998c5246c93d6dd038eb30603",
                "publishedAt": "2024-07-09T15:40:00Z",
                "content": "A new cyberattack is targeting iPhone users, with criminals attempting to obtain individuals' Apple IDs in a \"phishing\" campaign, security software company Symantec said in an alert Monday. \r\nCyber c… [+3610 chars]"
            },
            {
                "source": {
                    "id": "associated-press",
                    "name": "Associated Press"
                },
                "author": "MORGAN LEE, ANDREW DALTON",
                "title": "‘Rust’ shooting: Alec Baldwin’s trial will begin with jury selection - The Associated Press",
                "description": "Alec Baldwin's trial in the fatal shooting of a cinematographer is about to begin. Jury selection starts Tuesday in Santa Fe, New Mexico, in the actor's trial on a charge of involuntary manslaughter that could get him 18 months in prison. The judge and attorn…",
                "url": "https://apnews.com/article/alec-baldwin-trial-shooting-rust-halyna-hutchins-a6731e3226df0990f0469845df3ccde8",
                "urlToImage": "https://dims.apnews.com/dims4/default/fbeee31/2147483647/strip/true/crop/4405x2478+0+230/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8b%2Fb4%2F3911658b8d223e1ab628770bcabd%2F01b15d507431426b923a402d36fd4609",
                "publishedAt": "2024-07-09T15:38:00Z",
                "content": "SANTA FE, N.M. (AP) Alec Baldwins trial in the shooting of a cinematographer begins Tuesday with the selection of jurors who will decide whether the actor is guilty of involuntary manslaughter. \r\nGet… [+3956 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": null
                },
                "author": null,
                "title": "Hundreds of new UK lawmakers are sworn in as Parliament returns after a dramatic election - The Associated Press",
                "description": "",
                "url": "",
                "urlToImage": null,
                "publishedAt": "2024-07-09T15:10:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "associated-press",
                    "name": "Associated Press"
                },
                "author": "SAMYA KULLAB, ILLIA NOVIKOV",
                "title": "Kyiv mourns as rescuers sift piles of rubble at a children's hospital hit by a Russian missile - The Associated Press",
                "description": "Ukrainian President Volodymyr Zelenskyy says rescue operations have stretched into a second day at a major Kyiv children’s hospital struck by a Russian missile. Officials said Tuesday that at least 42 people were killed across the country and almost 200 were …",
                "url": "https://apnews.com/article/russia-ukraine-war-missiles-children-hospital-kyiv-0a33ed16baf2c509b205705bdd1155db",
                "urlToImage": "https://dims.apnews.com/dims4/default/7d3c66e/2147483647/strip/true/crop/8088x4550+0+421/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F8a%2Fa0af3db46f165abf530666d70dea%2F05284cbb2d9f46788d8c4c59282634d1",
                "publishedAt": "2024-07-09T14:56:00Z",
                "content": "KYIV, Ukraine (AP) Rescuers searched the rubble of Ukraines biggest childrens hospital on Tuesday for more dead and wounded, a day after Russian missiles leveled a wing of the facility and struck els… [+5480 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Brian Heater",
                "title": "Exclusive: Humane execs leave company to found AI fact-checking startup - TechCrunch",
                "description": "Infactory is a kind of fact-checking search engine that will be focused exclusively on data at launch.",
                "url": "https://techcrunch.com/2024/07/09/humane-execs-leave-company-to-found-ai-fact-checking-startup/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/07/Infactory-founders.webp?resize=1200,727",
                "publishedAt": "2024-07-09T14:49:00Z",
                "content": "As Humane struggles to find its footing in the nascent world of AI hardware, two top employees have exited the company to found their own startup. Its a story that, in some ways, echoes Humanes own o… [+4132 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "1970-01-01T00:00:00Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Vulture"
                },
                "author": "Ali Barthwell",
                "title": "The Bachelorette Season-Premiere Recap: Quit Playing Games - Vulture",
                "description": "Calling it now: Jenn will be the first Bachelorette to propose to her final guy. Read more and discuss in this week’s recap.",
                "url": "http://www.vulture.com/article/the-bachelorette-season-21-premiere-recap-week-1-entrances-first-impression-rose.html",
                "urlToImage": "https://pyxis.nymag.com/v1/imgs/e17/a3f/3189620ed4b543a1e00508e5c6b66cbf7d-bachelorette-recap-2101.1x.rsocial.w1200.jpg",
                "publishedAt": "2024-07-09T14:23:40Z",
                "content": "Lets just get this out of the way right now. Im calling it. Someone get Vegas on the line. My prediction for the DRAMATIC ENDING where Jenn does something NO BACHELORETTE HAS EVER DONE BEFORE is \r\nSh… [+10363 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNBC"
                },
                "author": "Kevin Breuninger",
                "title": "Democrats hold pivotal meetings on Biden, as divisions deepen after Trump debate - CNBC",
                "description": "It's the first full Democratic caucus meeting since President Joe Biden's poor debate showing against former President Donald Trump sparked a campaign crisis.",
                "url": "https://www.cnbc.com/2024/07/09/biden-campaign-democrats-updates.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/108002541-1720440711718-gettyimages-2161064043-_s2_7006_h1l51ozk.jpeg?v=1720535564&w=1920&h=1080",
                "publishedAt": "2024-07-09T14:11:04Z",
                "content": "House Democrats convened at their national party headquarters in Washington on Tuesday for a pivotal closed-door meeting, as members weigh whether to continue backing President Joe Biden's reelection… [+2999 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CBS Sports"
                },
                "author": "",
                "title": "Caitlin Clark on pace for WNBA's best rookie playmaking season: Fever star thriving alongside Aliyah Boston - CBS Sports",
                "description": "Clark is second in the league in assists at 7.4 per game",
                "url": "https://www.cbssports.com/wnba/news/caitlin-clark-on-pace-for-wnbas-best-rookie-playmaking-season-fever-star-thriving-alongside-aliyah-boston/",
                "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/07/09/1a1c165a-23b1-4a49-b995-b0d99e8ae3cd/thumbnail/1200x675/2fd2ee606eef045236f6b4a58441d022/gettyimages-2155621364-1-1.jpg",
                "publishedAt": "2024-07-09T13:59:12Z",
                "content": "During the Indiana Fever's loss to the Seattle Storm on June 27, Caitlin Clark ran 16 pick-and-rolls. She was trapped on 10 of them. Such defensive attention has been the norm for the No. 1 overall p… [+6199 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Modi in Russia: Indian PM's balancing act as he meets Putin - BBC.com",
                "description": "Mr Modi's visit coincides with a Nato summit, where Russia's invasion of Ukraine will be a major theme.",
                "url": "https://www.bbc.com/news/articles/cpd91pe5r9go",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/34e0/live/3b643c00-3dbe-11ef-9e1c-3b4a473456a6.jpg",
                "publishedAt": "2024-07-09T13:56:49Z",
                "content": "By Anbarasan Ethirajan, BBC News, Delhi\r\nIndian Prime Minister Narendra Modi is being keenly watched by his Western allies as he meets Russian President Vladimir Putin in Moscow on his first foreign … [+7240 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "1970-01-01T00:00:00Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NASASpaceflight.com"
                },
                "author": "Adrian Beil",
                "title": "Ariane 6 set for maiden launch from French Guiana - NASASpaceFlight.com - NASASpaceflight.com",
                "description": "Europe’s new heavy-lift rocket, Ariane 6, is set for its maiden flight. Liftoff is expected…",
                "url": "https://www.nasaspaceflight.com/2024/07/ariane-6-maiden-launch/",
                "urlToImage": "https://www.nasaspaceflight.com/wp-content/uploads/2024/07/IMG_1781.jpeg",
                "publishedAt": "2024-07-09T13:06:32Z",
                "content": "9Europe’s new heavy-lift rocket, Ariane 6, is set for its maiden flight. Liftoff is expected to occur at the opening of a four-hour launch window on Tuesday, July 9, at 18:00 UTC, with the window ext… [+14830 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Allison Johnson",
                "title": "Motorola’s 2024 Razr Plus is a damn fun flip phone with the same old flaws - The Verge",
                "description": "The 2024 Motorola Razr Plus is better than ever, with a bigger cover screen and a thoughtfully updated interface. But camera and software shortcomings persist.",
                "url": "https://www.theverge.com/24191156/motorola-razr-plus-2024-review-screen-battery-camera",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/sgAKhgl-ejgD4BT3Ejy8ZZpc_4M=/0x0:2000x1500/1200x628/filters:focal(1000x750:1001x751)/cdn.vox-cdn.com/uploads/chorus_asset/file/25522553/DSC07640_processed.jpg",
                "publishedAt": "2024-07-09T13:00:00Z",
                "content": "The bigger, better cover screen is a delight to use but familiar problems persist.\r\nByAllison Johnson, a reviewer with 10 years of experience writing about consumer tech. She has a special interest i… [+11407 chars]"
            }
        ]
    }

    console.log(response)
       
    let str = ""
    resultCount.innerHTML = response.totalResults
        for(let item of response.articles){
            str = str + ` <div class="card my-4 mx-2" style="width: 18rem;">
                <img src="${item.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="${item.url}" target ="_blank" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`
        }    
        document.querySelector(".content").innerHTML = str
}

fetchNews(1)
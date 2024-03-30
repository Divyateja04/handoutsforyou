import GitHubButton from 'react-github-btn'
import React, { useRef } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import Footer from './Footer'
import AutoCompleter from './AutoCompleter'
import classNames from 'classnames'

type Props = {
    current: String
}

const Menu = (props: Props) => {
    const { data: session } = useSession()
    const [menu, setMenu] = React.useState(false)

    const menuItems: any = {
        "Handouts": "/",
        "Academic Resources": "/notes",
        "Course Reviews": "/courses/reviews",
        "SI Companies": "/si",
        "SI Resources": "/si/resources",
        "RI Resources": "https://pollen-box-786.notion.site/Research-Chronicles-894bcac1266d4e5fac2f4cd76ff29750",
        "PS Chronicles": "/ps",
        "PS 1 Cutoffs": "/ps/ps1_data",
        "PS 2 Cutoffs": "/ps/ps2_data",
        "Course Prereqs": "/courses/prereqs",
        "Minor Courses": "/minors.html",
        "Add your Content": "https://forms.gle/5Q2Ek3TNGmAx2Rn46",
    }

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <button className="btn btn-outline w-1/4 m-3 md:hidden" onClick={() => toggleMenu()}>
                Menu
            </button>

            <GitHubButton href="https://github.com/divyateja04/handoutsforyou"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star divyateja04/handoutsforyou on GitHub">
                Star
            </GitHubButton>


            <div className={`${menu ? 'grid' : 'hidden'} md:grid md:grid-cols-4 justify-around`}>
                {Object.keys(menuItems).map(
                    (menuItem) =>
                        <Link className="m-3" href={menuItems[menuItem]} key={menuItems[menuItem]}>
                            <button className="btn btn-outline w-full uppercase">
                                {menuItem}
                            </button>
                        </Link>
                )}
            </div>

            < div className="grid md:grid-cols-3 justify-around" >
                {
                    !session
                        ?
                        <div className='col-span-3'>
                            <button className="btn btn-outline m-3" onClick={() => signIn("google")}>Sign in to access</button>
                        </div>
                        :
                        <Link href={"#"} className={`m-3 col-span-3`}>
                            <button className="btn btn-outline w-full" onClick={() => signOut()}>Sign Out</button>

                        </Link>
                }
            </div >
        </>)
}

export default Menu;

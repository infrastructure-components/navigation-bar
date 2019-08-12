import React from 'react';
import styled from 'styled-components';

/**
 * A styled frame for our page
 */
export const Frame = styled.div`
    
    /* just a test to see whether our styling works */
    background-color: red;
    
`;

/**
 * A styled navigation bar. Base code shared by TopNavBar and Footer
 */
export const NavBar = styled.div`
    background-color: gray;
    overflow: hidden;
    
    
`;

export const TopNavBar = styled(NavBar)`
    position: absolute;
    top:0;
    width:100%;
    z-index: 5;
`;

export const Content = styled.div`
    position: relative;
    margin-top: 
    background-color: green;
`;


export const Footer = styled(NavBar)`
    /* make the Footer always stick to the bottom 
    position:absolute;
    bottom:0;
    width:100%;
    height:40px;*/
`;


/**
 * A functional React component as a wrapper for a page with navigation.
 * Renders the page's content in our styled <Frame />
 */
export default function WithNavigation (props) {

    document.getElementsByTagName("html")[0].style.height = "100%";
    document.getElementsByTagName("body")[0].style.top = "100vh";
    document.getElementById("root").style.height = "100%";

    return <Frame>
        <TopNavBar>
            Top NavBar
        </TopNavBar>

        <Content>
            { props.children }
        </Content>

        <Footer>
            Footer
        </Footer>
    </Frame>;

}
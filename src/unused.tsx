
/**
 * A styled frame for our page
 */
export const Frame = styled.div`
    
    /* just a test to see whether our styling works */
    //background-color: #EEE;
    
    /*
     * 100vh (vw for view height) makes the frame take the whole browser screen
     * subtract the navBarHeight because the margin-top of the <Content /> would
     * push the frame down and cause the whole frame to scroll.
    
    height: calc(100vh - ${navBarHeight});
    top: 0; */
`;



export interface IItem {
    active: boolean | undefined
}

const LeftItem: IItem = styled(Link)`
    position: relative;
    float: left;
    display:inline-block;
    
`;


const RightItem: IItem = styled(Link)`
    position: relative;
    float: right;
    display:inline-block;
`;


interface IPositionedItemProps {
    left: string
}

function PositionedItem (props: IPositionedItemProps) {
    const { left, ...passedProps } = props;
    return left ? <LeftItem { ...passedProps } /> : <RightItem {...passedProps} />
}

left={!route.customType || route.customType.left}
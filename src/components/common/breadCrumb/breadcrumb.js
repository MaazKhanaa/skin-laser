import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './style.css';

export default function BreadCrumb({ text_1, text_2 }) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item style={{ color: 'white !important' }}>{text_1}</Breadcrumb.Item>
            <Breadcrumb.Item active style={{ color: 'gainsboro' }}>{text_2}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
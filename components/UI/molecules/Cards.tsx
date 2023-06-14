import Link from 'next/link';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import { imgCard } from 'types/components/edit';

export function DefaultImgCard(props: imgCard) {
  return (
    <Link href={props.hrefUrl}>
      <a id={props.id} className={`img-card ${props.class}`}>
        {props.imgUrl ? (
          <img src={props.imgUrl} alt={props.imgAlt} />
        ) : (
          <div className="img flex-center">
            <PhotoOutlinedIcon sx={{ fontSize: 45 }} />
          </div>
        )}
        <span>{props.text}</span>
      </a>
    </Link>
  );
}

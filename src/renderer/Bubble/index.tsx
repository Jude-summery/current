import './index.scss';

interface BubbleProps {
  type: string;
  content: string;
}

export default function Bubble(props: BubbleProps) {
  const { type, content } = props;
  return (
    <div className={type === 'ours' ? 'bubble--ours' : 'bubble--others'}>
      {content}
    </div>
  );
}

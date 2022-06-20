import SvgIcon from '@mui/material/SvgIcon';

interface MenuItemProps {
  title: string;
  iconPath: string;
}

export default function MenuItem(props: MenuItemProps) {
  const { title, iconPath } = props;
  return (
    <div title={title} className="menu__item">
      <SvgIcon>
        <path d={iconPath} />
      </SvgIcon>
    </div>
  );
}

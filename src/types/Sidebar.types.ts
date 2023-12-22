/* Sidebar Types */

export type NavListItem = {
  label: string;
  icon: React.ElementType;
};

export interface SidebarProps {
  navList: NavListItem[];
}

/* Sidebar Profile Card Types */

export type User = {
  username: string;
  photo: string;
};

export interface ProfileCardProps {
  user: User;
}

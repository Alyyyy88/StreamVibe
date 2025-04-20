const FooterItems = ({ title, links =[] }) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h3 className="text-white md:text-lg text-sm font-bold">{title}</h3>
      <ul className="text-[#999999] md:text-sm text-xs flex flex-col gap-4">
        {
          links.map((link ,index)=>(
            <li key={index}>
              <a href={link.href || '#'}>{link.label}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default FooterItems;

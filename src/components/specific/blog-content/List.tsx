import Paragraph from "./Paragraph";

type ListProps = { items: { content: string }[] };

function List({ items }: ListProps) {
    return (
        <ul className="my-4 space-y-4">
            {items.map((item) => (
                <li key={item.content}>
                    <div className="flex items-center gap-x-2">
                        <span className="ball"></span>
                        <span className="font-pelak-medium text-lg">{item.content}</span>
                    </div>
                    <Paragraph>یکی از ویژگی‌های برجسته React، ساختار کامپوننت‌ محور آن است. این ساختار به توسعه‌دهندگان اجازه می‌دهد که کدهای خود را به قطعات کوچکتر، ماژولار تر، و قابل استفاده مجدد تقسیم کنند. این قابلیت نه‌ تنها باعث کاهش حجم کد می‌شود، بلکه مدیریت و نگهداری پروژه‌ها را نیز ساده‌ تر می‌کند.</Paragraph>
                </li>
            ))}
        </ul>
    );
}

export default List;

import Link from 'next/link';

type Props = {
    items: readonly {
        label: string;
        href: string;
    }[];
};

export function Navbar({ items }: Props) {
    return (
        <nav className="w-full">
            <div className="mx-auto flex max-w-container items-center justify-between">
                <Link href="/">
                    MOVISA
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
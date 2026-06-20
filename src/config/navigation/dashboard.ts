import { ROUTES } from '@/constants/routes';

export const dashboardNavigation = [
    {
        label: 'Dashboard',
        href: ROUTES.DASHBOARD,
    },

    {
        label: 'Agents',
        href: ROUTES.AGENTS,
    },

    {
        label: 'Cards',
        href: ROUTES.CARDS,
    },

    {
        label: 'Treasury',
        href: ROUTES.TREASURY,
    },

    {
        label: 'Approvals',
        href: ROUTES.APPROVALS,
    },

    {
        label: 'Audit Logs',
        href: ROUTES.AUDIT_LOGS,
    },
    {
        label: 'Transaction',
        href: ROUTES.TRANSACTIONS,
    },
] as const;
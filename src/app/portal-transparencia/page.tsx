import BreadCrumb from "@/components/breadcrumb"
import PagesTitles from "@/components/pagesTitles"
import Features from "@/components/sections/features"
import { CONTACT_INFO } from "@/lib/vars";

const buttonsData = [
    {
        href: `${CONTACT_INFO.despesasLink}`,
        title: "Despesas",
        icon: "/svg/despesas.svg",
        bgColor: "bg-teal-200",
        hoverColor: "group-hover:bg-teal-600",
        description: "Veja como os recursos públicos estão sendo utilizados, detalhados por categoria e período.",
    },
    {
        href: `${CONTACT_INFO.receitasLink}`,
        title: "Receitas",
        icon: "/svg/receitas.svg",
        bgColor: "bg-violet-200",
        hoverColor: "group-hover:bg-violet-600",
        description: "Consulte as receitas obtidas por nossa instituição, incluindo fontes e valores arrecadados.",
    },
    {
        href: `${CONTACT_INFO.contratosLink}`,
        title: "Licitações e Contratos",
        icon: "/svg/contratos.svg",
        bgColor: "bg-orange-200",
        hoverColor: "group-hover:bg-orange-600",
        description: "Acesse detalhes sobre licitações em andamento e contratos firmados pela instituição.",
    },
];

const PortalTransparencia = () => {
    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Portal Transparência', href: '/portal-transparencia' },
                ]}
            />
            <PagesTitles title="Portal Transparência" />
            <div className="m-4">
                <Features
                    buttonsData={buttonsData}
                    sectionTitle="Portal da Transparência"
                    sectionDescription="Acompanhe as informações sobre as receitas, despesas e contratos do hospital. Promovemos a transparência e o acesso aos dados para toda a comunidade."
                    badge="Transparência"
                    target="_blank"
                />

            </div>
        </div>
    )
}

export default PortalTransparencia
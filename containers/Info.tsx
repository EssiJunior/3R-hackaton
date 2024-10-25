import Section from "@/components/Section"
import { TimelineDemo } from "@/components/Timeline"

const Info = () => {
    return (
        <Section crosses className="!px-0 !py-10 bg-n-1 dark:bg-n-8/90 ">
            <main className="bg-primary">
                <TimelineDemo />
            </main>
        </Section>
    )
}

export default Info
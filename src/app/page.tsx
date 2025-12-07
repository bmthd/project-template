import Image from "next/image";
import { Card, Heading, HStack } from "@/ui";

export default function Home() {
	return (
		<HStack>
			<Heading>Example</Heading>
			<Card.Root>
				<Card.Header>Card Header</Card.Header>
				<Card.Body>
					<Image src="/next-logo.png" alt="Next.js Logo" width={180} height={37} />
				</Card.Body>
				<Card.Footer>Card Footer</Card.Footer>
			</Card.Root>
		</HStack>
	);
}

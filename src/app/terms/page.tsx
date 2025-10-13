import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Commission Terms — Fraimer",
	description:
		"Terms and conditions for commissions: payments, revisions, delivery, ownership, and support.",
};

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
				<h1 className="text-3xl sm:text-4xl font-bold font-mono mb-8">Commission Terms</h1>

				<div className="space-y-8 text-gray-300 leading-relaxed">
					<section>
						<h2 className="font-mono text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
						<p>
							By commissioning the Developer, the Client acknowledges that they have read, understood, and agreed to be bound by these Terms. The Developer reserves the right to decline any commission at their sole discretion.
						</p>
					</section>

					<section>
						<h2 className="font-mono text-xl font-semibold text-white mb-3">2. Payment Terms</h2>
						<ol className="list-decimal pl-5 space-y-2">
							<li>
								The Client shall make payment in accordance with the price agreed upon before the commencement of the project.
							</li>
							<li>
								For smaller projects, full payment may be required upfront. For larger projects, a milestone structure (such as 50% upfront and 50% upon completion) may be agreed upon.
							</li>
							<li>
								Payments shall be made through PayPal, Ko-fi, or any other method approved by the Developer.
							</li>
							<li>
								Once work has commenced, all payments are considered non-refundable, except in cases where the Developer fails to deliver the agreed-upon product.
							</li>
						</ol>
					</section>

					<section>
						<h2 className="font-mono text-xl font-semibold text-white mb-3">3. Project Development and Delivery</h2>
						<ol className="list-decimal pl-5 space-y-2">
							<li>The Developer shall commence work upon receipt of the agreed payment.</li>
							<li>
								Estimated completion dates will be discussed prior to the start of the project. These are subject to reasonable extension depending on project complexity or unforeseen circumstances.
							</li>
							<li>
								Upon completion, the Developer shall deliver the commissioned product to the Client, along with any necessary setup instructions or access credentials.
							</li>
							<li>
								Any additional requests or modifications made after the delivery of the final product shall be subject to a new agreement or additional fees.
							</li>
						</ol>
					</section>

					<section>
						<h2 className="font-mono text-xl font-semibold text-white mb-3">4. Revisions and Support</h2>
						<ol className="list-decimal pl-5 space-y-2">
							<li>The Client is entitled to a reasonable number of revisions during the development process.</li>
							<li>
								Revisions that substantially alter the scope or functionality of the project shall be treated as new work and may incur additional charges.
							</li>
							<li>
								The Developer shall provide complimentary technical support and bug fixes for a period of up to fourteen (14) days following delivery.
							</li>
							<li>
								Continued support, updates, or maintenance beyond this period may be provided at an agreed-upon recurring or one-time fee.
							</li>
						</ol>
					</section>

					<section>
						<h2 className="font-mono text-xl font-semibold text-white mb-3">5. Ownership and Rights</h2>
						<ol className="list-decimal pl-5 space-y-2">
							<li>Ownership of the final commissioned product transfers to the Client only after full payment has been received.</li>
							<li>
								The Developer retains the right to showcase the commissioned work in portfolios, social media posts, or promotional materials unless the Client expressly requests confidentiality in writing.
							</li>
							<li>
								The Client shall not resell, redistribute, or claim authorship of the Developer’s work without explicit written consent.
							</li>
						</ol>
					</section>

					<section>
						<h2 className="font-mono text-xl font-semibold text-white mb-3">6. Hosting and Maintenance</h2>
						<ol className="list-decimal pl-5 space-y-2">
							<li>
								For commissions involving hosting (such as Discord bots or web applications), the Developer may provide hosting as part of the agreement or recommend self-hosting options.
							</li>
							<li>
								If the Developer provides hosting, uptime and maintenance are subject to the limitations of the chosen hosting plan.
							</li>
							<li>
								The Developer shall not be held liable for downtime or data loss resulting from third-party hosting services or external factors beyond their control.
							</li>
						</ol>
					</section>

					<section>
						<h2 className="font-mono text-xl font-semibold text-white mb-3">7. Refunds and Cancellations</h2>
						<ol className="list-decimal pl-5 space-y-2">
							<li>Full refunds may only be issued if the Developer has not yet commenced any work on the project.</li>
							<li>
								Partial refunds may be considered for projects that are cancelled mid-development, based on the percentage of work completed.
							</li>
							<li>No refunds shall be granted once the final product has been delivered to the Client.</li>
						</ol>
					</section>

					<section>
						<h2 className="font-mono text-xl font-semibold text-white mb-3">8. Client Conduct and Communication</h2>
						<ol className="list-decimal pl-5 space-y-2">
							<li>The Client agrees to maintain clear and respectful communication throughout the project.</li>
							<li>
								Failure to respond or provide necessary information within fourteen (14) days may result in project cancellation without refund.
							</li>
							<li>
								The Developer shall not be held responsible for delays caused by the Client’s lack of communication or late responses.
							</li>
						</ol>
					</section>

					<section>
						<h2 className="font-mono text-xl font-semibold text-white mb-3">9. Limitation of Liability</h2>
						<p>
							The Developer shall not be held liable for any damages, loss of data, or business interruption resulting from the use or misuse of the commissioned product. The Client assumes full responsibility for deployment and operation after delivery.
						</p>
					</section>

					<p className="text-sm text-gray-500 mt-10">Last updated: {new Date().toLocaleDateString()}</p>
				</div>
			</div>
		</div>
	);
}



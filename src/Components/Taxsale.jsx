import React from 'react'

function Taxsale() {
  return (
    <div className="bg-white px-6 md:px-24 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
       Tax Clearance Certificate
      </h1>
      <p className="text-lg mb-6">
       Tax clearance certificate, as the name suggests, is a document issued by the VDC/municipality that proves that an individual is clear of taxes i.e, has no remaining tax and pays his taxes(income and property taxes) regularly.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it is:</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>
           An official document issued by your local VDC/municipality, verifying that you have no outstanding tax dues.
          </li>
          <li>Typically required for various purposes, including:</li>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Student visa applications (e.g., Australia)</li>
            <li>Government job applications</li>
            <li>Business or property transactions</li>
          </ul>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Issuing Authority:</h2>
        <p className="text-base">VDC (Village Development Committee) or Municipality in your local area.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Documents Required:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Visit your local VDC/Municipality office with the required documents.
</li>
          <li>Fill out the application form and submit it.</li>
          <li>Pay any applicable fees.</li>
          <li>The VDC/Municipality will verify your tax records and issue the Tax Clearance Certificate.</li>
        </ul>
      </div>
 <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Procedure:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Visit your local VDC/Municipality office with the required documents.</li>
          <li>Fill out the application form and submit it along with the documents.</li>
          <li>Pay any applicable fees.</li>
          <li>The VDC/Municipality will verify the documents and issue the Relationship Certificate.</li>
        </ul>
      </div>

    <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Additional Points:</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Processing time can vary, so plan accordingly.</li>
            <li>The certificate might be issued in Nepali and English, depending on the issuing authority.</li>
          
          
        </ul>
      </div>
    </div>
  )
}

export default Taxsale
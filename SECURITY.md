# Security Policy

Thanks for helping keep Bitcoin Envoy safe. This document explains what is in
scope, how to report a vulnerability privately, and what to expect after you do.

## Scope

This policy covers:

- The website at [bitcoinenvoy.co](https://bitcoinenvoy.co)
- The source code in this repository (`jcarson06/bitcoin-envoy`)

Bitcoin Envoy is a static, prerendered marketing and education site. It has no
user accounts, no login, no database, and no backend API. It does not collect
payments and never asks for wallet keys, seed phrases, or any other Bitcoin
credentials. **No one from Bitcoin Envoy will ever ask you for your seed phrase.**

### Out of scope

Reports of the following will generally be closed without action:

- Findings against third-party services we merely link to (exchanges, wallet
  vendors, YouTube, social platforms)
- Missing security headers, cookie flags, or TLS configuration nits with no
  demonstrated impact on a site that stores no user data
- Automated scanner output submitted without a working proof of concept
- Denial of service, volumetric testing, or any traffic that degrades the site
  for other visitors
- Social engineering of the maintainer, and physical attacks
- Vulnerabilities requiring a compromised device, a malicious browser
  extension, or an already-privileged local attacker
- Outdated dependency versions with no exploitable path in this project

## Reporting a Vulnerability

**Email [jeff@bitcoinenvoy.co](mailto:jeff@bitcoinenvoy.co)** with `SECURITY` in
the subject line. That is the only reporting channel.

This repository is private, so GitHub's private vulnerability reporting is not
available — that feature only exists for public repositories. If you have been
given access to this repository, please still use email rather than opening an
issue, so the details do not sit in the issue tracker before a fix ships.

The same contact is published on the live site at
[bitcoinenvoy.co/.well-known/security.txt](https://bitcoinenvoy.co/.well-known/security.txt),
following [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116.html). If you change
the contact address, update both files — and note that `security.txt` carries an
`Expires` date that needs renewing once a year.

Helpful reports include:

- What the issue is and why it matters
- Step-by-step reproduction, including the affected URL or file
- A proof of concept, if you have one
- Any suggested fix you would like to propose

## What to Expect

- **Acknowledgement** within 5 business days.
- **An assessment** — whether we consider it in scope and how severe we think
  it is — within 10 business days of acknowledgement.
- **A fix** for confirmed issues as quickly as is practical. This is a small
  project maintained by one person, so please allow reasonable time.
- **Updates** as the work progresses, and a note when the fix ships.

Please give us a chance to resolve the issue before disclosing it publicly.

## Recognition

There is no paid bug bounty for this project. Reporters of valid, in-scope
issues are credited by name in the fix commit or release notes if they would
like to be — just say so in your report.

## Safe Harbor

We will not pursue or support legal action against anyone who reports a
vulnerability in good faith under this policy: who stays within the scope
above, avoids privacy violations and service degradation, accesses only their
own data, and gives us reasonable time to respond before public disclosure.

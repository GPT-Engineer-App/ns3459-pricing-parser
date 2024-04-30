# ns3459-pricing-parser

I want to develop a pricing converter that takes XML documents according to NS3459 and lists up all the lines items in the request for pricing document line by line with the relevant information. 

The user will have to upload the XML and the tool will parse it and list up the line items according to each chapter. 

Here is a sample start of one file:
<?xml version="1.0"?>
<NS3459 Versjon="2012" xmlns="http://www.standard.no/ns3459" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.standard.no/ns3459 http://www.standard.no/ns3459/ns3459-2012.xsd">
	<Pristilbud>
		<Generelt>
			<Dato>2024-04-15</Dato>
			<Avsender>
				<Person>
					<Navn>SteinarBorgenGladsø</Navn>
				</Person>
				<Firma>
					<Navn>Økovent</Navn>
				</Firma>
			</Avsender>
			<ProgramNavn>ISY Linker</ProgramNavn>
			<ProgramVersjon>11.5</ProgramVersjon>
		</Generelt>
		<ProsjektNS>
			<ID>ce757d80-c618-4ada-8a32-24a44c4d018b</ID>
			<Navn>NTNU ANSK-24-0032 K5 VENTILASJON</Navn>
			<Valuta>NOK</Valuta>
			<Postnrplan>
				<Struktur>Hierarkisk</Struktur>
				<PostnrdelTyper>
					<PostnrdelType>
						<Type>Type1</Type>
						<Navn>Kapittel</Navn>
						<Numerisk>0</Numerisk>
						<MinLengde>1</MinLengde>
						<MaksLengde>2</MaksLengde>
						<UlovligeTegn>.,;:!"'#</UlovligeTegn>
						<SkilletegnBak>.</SkilletegnBak>
					</PostnrdelType>
					<PostnrdelType>
						<Type>Type2</Type>
						<Navn>Bygningsdel</Navn>
						<Numerisk>0</Numerisk>
						<MinLengde>1</MinLengde>
						<MaksLengde>3</MaksLengde>
						<UlovligeTegn>.,;:!"'#</UlovligeTegn>
						<SkilletegnBak>.</SkilletegnBak>
					</PostnrdelType>
					<PostnrdelType>
						<Type>Hovedlopenr</Type>
						<Navn>Hovedløpenr</Navn>
						<Numerisk>1</Numerisk>
						<MinLengde>0</MinLengde>
						<MaksLengde>0</MaksLengde>
						<SkilletegnBak>.</SkilletegnBak>
					</PostnrdelType>
					<PostnrdelType>
						<Type>Underlopenr</Type>
						<Navn>Underløpenr</Navn>
						<Numerisk>0</Numerisk>
						<MinLengde>0</MinLengde>
						<MaksLengde>15</MaksLengde>
						<UlovligeTegn>.</UlovligeTegn>
					</PostnrdelType>
				</PostnrdelTyper>
				<PostnrdelKoder>
					<PostnrdelKode>
						<Type>Type1</Type>
						<Kode>00</Kode>
						<Navn>Generelt</Navn>
						<AlminneligDel>0</AlminneligDel>
						<PostnrdelKoder>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>X2</Kode>
								<Navn>Kontosummering</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
						</PostnrdelKoder>
					</PostnrdelKode>
					<PostnrdelKode>
						<Type>Type1</Type>
						<Kode>01</Kode>
						<Navn>Diverse ytelser</Navn>
						<AlminneligDel>0</AlminneligDel>
						<PostnrdelKoder>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>01</Kode>
								<Navn>Innledende tekster og generelle krav</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>12</Kode>
								<Navn>Etablering, drift og avvikling</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>19</Kode>
								<Navn>Opplæring, prøvedrift, ferdigstilling</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>20</Kode>
								<Navn>Merking</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>21</Kode>
								<Navn>Diverse</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
						</PostnrdelKoder>
					</PostnrdelKode>
					<PostnrdelKode>
						<Type>Type1</Type>
						<Kode>30</Kode>
						<Navn>VVS-installasjoner</Navn>
						<AlminneligDel>0</AlminneligDel>
					</PostnrdelKode>
					<PostnrdelKode>
						<Type>Type1</Type>
						<Kode>36</Kode>
						<Navn>Luftbehandlingsanlegg</Navn>
						<AlminneligDel>0</AlminneligDel>
						<PostnrdelKoder>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>361</Kode>
								<Navn>Kanalnett i grunnen for luftbehandling</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>362</Kode>
								<Navn>Kanalnett for luftbehandling</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>364</Kode>
								<Navn>Utstyr for luftfordeling</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>365</Kode>
								<Navn>Utstyr for luftbehandling</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>366</Kode>
								<Navn>Isolasjon av installasjon for luftbehandling</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
							<PostnrdelKode>
								<Type>Type2</Type>
								<Kode>369</Kode>
								<Navn>Annet utstyr for luftbehandling</Navn>
								<AlminneligDel>0</AlminneligDel>
							</PostnrdelKode>
						</PostnrdelKoder>
					</PostnrdelKode>
				</PostnrdelKoder>
			</Postnrplan>
			<Poster>
				<Post>
					<ID>05d690ff-d259-4613-946a-6fef6014ab1e</ID>
					<Postnr>01.01.2</Postnr>
					<Postnrdeler>
						<Postnrdel>
							<Type>Type1</Type>
							<Kode>01</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Type2</Type>
							<Kode>01</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Hovedlopenr</Type>
							<Kode>2</Kode>
						</Postnrdel>
					</Postnrdeler>
					<Egenskaper>
						<Egenskap>
							<Navn>NOIS.2009ID</Navn>
							<Verdi>01;01#2</Verdi>
						</Egenskap>
					</Egenskaper>
					<Tekst OriginalFormat="RTF">
						<Uformatert>Krav i andre deler av kontraktsgrunnlaget

Det henvises til del 2 i kontraktsgrunnlaget.

Krav i dokumenter i del 2 i konkurransegrunnlaget som ikke er priset i egne poster skal inkluderes i enhetsprisene i denne beskrivelsen.

Det forutsettes at entreprenøren setter seg grundig inn i alle dokumenter som inngår i anbudet.

Priskonsekvenser for krav i øvrige dokumenter i kontraktsgrunnlaget som ikke er priset andre steder prises som rund sum i denne post. En beskrivelse over hva som eventuelt prises legges ved tilbudet med henvisning til denne post.</Uformatert>
						<RTF>{\rtf1\ansi\ansicpg1252\deff0\deflang1044{\fonttbl{\f0\fswiss\fprq2\fcharset0 Arial;}{\f1\fnil\fprq4\fcharset0 Arial;}}
\viewkind4\uc1\pard\b\f0\fs20 Krav i andre deler av kontraktsgrunnlaget\par
\b0\par
Det henvises til del 2 i kontraktsgrunnlaget.\par
\par
Krav i dokumenter i del 2 i konkurransegrunnlaget som ikke er priset i egne poster \i skal\i0  inkluderes i enhetsprisene i denne beskrivelsen.\par
\par
Det forutsettes at entrepren\'f8ren setter seg grundig inn i alle dokumenter som inng\'e5r i anbudet.\f1\par
\par
\f0 Priskonsekvenser for krav i \'f8vrige dokumenter i kontraktsgrunnlaget som ikke er priset andre steder prises som rund sum i denne post. En beskrivelse over hva som eventuelt prises legges ved tilbudet med henvisning til denne post.\par
}
</RTF>
					</Tekst>
					<Prisinfo>
						<Mengderegel>Rund sum</Mengderegel>
						<Enhet>RS</Enhet>
						<Mengde>1</Mengde>
						<Enhetspris>0</Enhetspris>
						<Sum>0</Sum>
					</Prisinfo>
				</Post>
				<Post>
					<ID>8e85683a-4c3f-41ed-ad03-ea4e843b7985</ID>
					<Postnr>01.12.1</Postnr>
					<Postnrdeler>
						<Postnrdel>
							<Type>Type1</Type>
							<Kode>01</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Type2</Type>
							<Kode>12</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Hovedlopenr</Type>
							<Kode>1</Kode>
						</Postnrdel>
					</Postnrdeler>
					<Egenskaper>
						<Egenskap>
							<Navn>Focus.Kodeversjon</Navn>
							<Verdi>202202</Verdi>
						</Egenskap>
						<Egenskap>
							<Navn>NOIS.2009ID</Navn>
							<Verdi>01;12#1</Verdi>
						</Egenskap>
					</Egenskaper>
					<Kode>
						<ID>AV1.1</ID>
						<Revisjon>2022</Revisjon>
						<Kodetekst>
							<Overskrift>ETABLERING AV BYGGE- ELLER ANLEGGSPLASS FOR EGET KONTRAKTARBEID</Overskrift>
							<Stikkordvalg Stikkord="Lokalisering:">
								<Tekst>Byggeplass</Tekst>
							</Stikkordvalg>
							<AndreKravNei Tekst="Andre krav: Nei"/>
						</Kodetekst>
					</Kode>
					<Prisinfo>
						<Mengderegel>Rund sum</Mengderegel>
						<Enhet>RS</Enhet>
						<Mengde>1</Mengde>
						<Enhetspris>0</Enhetspris>
						<Sum>0</Sum>
					</Prisinfo>
				</Post>
				<Post>
					<ID>8abbe85d-40d7-4ccf-9cca-20b9ab694983</ID>
					<Postnr>01.12.2</Postnr>
					<Postnrdeler>
						<Postnrdel>
							<Type>Type1</Type>
							<Kode>01</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Type2</Type>
							<Kode>12</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Hovedlopenr</Type>
							<Kode>2</Kode>
						</Postnrdel>
					</Postnrdeler>
					<Egenskaper>
						<Egenskap>
							<Navn>Focus.Kodeversjon</Navn>
							<Verdi>202202</Verdi>
						</Egenskap>
						<Egenskap>
							<Navn>NOIS.2009ID</Navn>
							<Verdi>01;12#2</Verdi>
						</Egenskap>
					</Egenskaper>
					<Kode>
						<ID>AV2.1</ID>
						<Revisjon>2022</Revisjon>
						<Kodetekst>
							<Overskrift>DRIFT AV BYGGE- ELLER ANLEGGSPLASS FOR EGET KONTRAKTARBEID</Overskrift>
							<Stikkordvalg Stikkord="Lokalisering:">
								<Tekst>Byggeplass</Tekst>
							</Stikkordvalg>
							<AndreKravNei Tekst="Andre krav: Nei"/>
						</Kodetekst>
					</Kode>
					<Prisinfo>
						<Mengderegel>Rund sum</Mengderegel>
						<Enhet>RS</Enhet>
						<Mengde>1</Mengde>
						<Enhetspris>0</Enhetspris>
						<Sum>0</Sum>
					</Prisinfo>
				</Post>
				<Post>
					<ID>66ca95eb-d0de-4681-a6ba-80ab7e35868b</ID>
					<Postnr>01.12.3</Postnr>
					<Postnrdeler>
						<Postnrdel>
							<Type>Type1</Type>
							<Kode>01</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Type2</Type>
							<Kode>12</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Hovedlopenr</Type>
							<Kode>3</Kode>
						</Postnrdel>
					</Postnrdeler>
					<Egenskaper>
						<Egenskap>
							<Navn>Focus.Kodeversjon</Navn>
							<Verdi>202202</Verdi>
						</Egenskap>
						<Egenskap>
							<Navn>NOIS.2009ID</Navn>
							<Verdi>01;12#3</Verdi>
						</Egenskap>
					</Egenskaper>
					<Kode>
						<ID>AV3.1</ID>
						<Revisjon>2022</Revisjon>
						<Kodetekst>
							<Overskrift>AVVIKLING AV BYGGE ELLER ANLEGGSPLASS FOR EGET KONTRAKTARBEID</Overskrift>
							<Stikkordvalg Stikkord="Lokalisering:">
								<Tekst>Byggelass og hele bygget</Tekst>
							</Stikkordvalg>
							<AndreKravNei Tekst="Andre krav: Nei"/>
						</Kodetekst>
					</Kode>
					<Prisinfo>
						<Mengderegel>Rund sum</Mengderegel>
						<Enhet>RS</Enhet>
						<Mengde>1</Mengde>
						<Enhetspris>0</Enhetspris>
						<Sum>0</Sum>
					</Prisinfo>
				</Post>
				<Post>
					<ID>9b49f888-e413-4ac2-a343-915d67429659</ID>
					<Postnr>01.12.4</Postnr>
					<Postnrdeler>
						<Postnrdel>
							<Type>Type1</Type>
							<Kode>01</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Type2</Type>
							<Kode>12</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Hovedlopenr</Type>
							<Kode>4</Kode>
						</Postnrdel>
					</Postnrdeler>
					<Egenskaper>
						<Egenskap>
							<Navn>Focus.Kodeversjon</Navn>
							<Verdi>202202</Verdi>
						</Egenskap>
						<Egenskap>
							<Navn>NOIS.2009ID</Navn>
							<Verdi>01;12#4</Verdi>
						</Egenskap>
					</Egenskaper>
					<Kode>
						<ID>AJ8.23</ID>
						<Revisjon>2022</Revisjon>
						<Kodetekst>
							<Overskrift>TILPASNING TIL AVFALLSPLAN</Overskrift>
							<AndreKravNei Tekst="Andre krav: Nei"/>
						</Kodetekst>
					</Kode>
					<Prisinfo>
						<Mengderegel>Rund sum</Mengderegel>
						<Enhet>RS</Enhet>
						<Mengde>1</Mengde>
						<Enhetspris>0</Enhetspris>
						<Sum>0</Sum>
					</Prisinfo>
				</Post>
				<Post>
					<ID>f6046758-db3b-4e43-85f1-e209e4549d0d</ID>
					<Postnr>01.12.5</Postnr>
					<Postnrdeler>
						<Postnrdel>
							<Type>Type1</Type>
							<Kode>01</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Type2</Type>
							<Kode>12</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Hovedlopenr</Type>
							<Kode>5</Kode>
						</Postnrdel>
					</Postnrdeler>
					<Egenskaper>
						<Egenskap>
							<Navn>Focus.Kodeversjon</Navn>
							<Verdi>202202</Verdi>
						</Egenskap>
						<Egenskap>
							<Navn>NOIS.2009ID</Navn>
							<Verdi>01;12#5</Verdi>
						</Egenskap>
					</Egenskaper>
					<Kode>
						<ID>AO2.22A</ID>
						<Revisjon>2022</Revisjon>
						<Kodetekst>
							<Overskrift>BYGGRENHOLD</Overskrift>
							<Stikkordvalg Stikkord="Lokalisering:">
								<Tekst>Hele bygget</Tekst>
							</Stikkordvalg>
							<Stikkordvalg Stikkord="Krav til utførelse:">
								<Tekst>Se andre krav</Tekst>
							</Stikkordvalg>
							<Stikkordvalg Stikkord="Rengjøringsfrekvens:">
								<Tekst>Se andre krav</Tekst>
							</Stikkordvalg>
							<Stikkordvalg Stikkord="Kontrollmetode:">
								<Tekst>Se andre krav</Tekst>
							</Stikkordvalg>
							<AndreKravJa Tekst="Andre krav:">
								<KravA Gruppe="a)" Overskrift="Omfang og prisgrunnlag">
									<Tekst OriginalFormat="RTF">
										<Uformatert>
Det vises til dokument del 2 kontraktsgrunnlag</Uformatert>
										<RTF>{\rtf1\ansi\ansicpg1252\deff0\deflang1044{\fonttbl{\f0\fnil\fprq4\fcharset0 Arial;}}
\viewkind4\uc1\pard\li426\tx426\f0\fs20\par
Det vises til dokument del 2 kontraktsgrunnlag}
</RTF>
									</Tekst>
								</KravA>
							</AndreKravJa>
						</Kodetekst>
					</Kode>
					<Prisinfo>
						<Mengderegel>Rund sum</Mengderegel>
						<Enhet>RS</Enhet>
						<Mengde>1</Mengde>
						<Enhetspris>0</Enhetspris>
						<Sum>0</Sum>
					</Prisinfo>
				</Post>
				<Post>
					<ID>7c11db3d-ff5d-4917-8899-576ac9ce6341</ID>
					<Postnr>01.19.1</Postnr>
					<Postnrdeler>
						<Postnrdel>
							<Type>Type1</Type>
							<Kode>01</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Type2</Type>
							<Kode>19</Kode>
						</Postnrdel>
						<Postnrdel>
							<Type>Hovedlopenr</Type>
							<Kode>1</Kode>
						</Postnrdel>
					</Postnrdeler>
					<Egenskaper>
						<Egenskap>
							<Navn>Focus.Kodeversjon</Navn>
							<Verdi>202202</Verdi>
						</Egenskap>
						<Egenskap>
							<Navn>NOIS.2009ID</Navn>
							<Verdi>01;19#1</Verdi>
						</Egenskap>
					</Egenskaper>
					<Kode>
						<ID>AQ4.222A</ID>
						<Revisjon>2022</Revisjon>
						<Kodetekst>

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/ns3459-pricing-parser.git
cd ns3459-pricing-parser
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

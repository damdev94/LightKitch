import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/components/faq.scss';

export default function Faq() {
  return (
    <div className='faq-questions-container'>
      <div className='questions-title'>
        <h2>Questions fréquemment posées</h2>
      </div>
      <div className='questions'>
        <Accordion className='question'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='question-summary'
          >
            Qu’est-ce qu’un restaurant virtuel?
          </AccordionSummary  >
          <AccordionDetails className='question-infos'>
          C’est une vitrine virtuelle qui est présente sur les plateformes de livraison (tel que UberEats, Deliveroo, JustEat ou Lyveat) et qui permet d’exposer son menu pour être visible par le plus grand nombre.
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
            Pourquoi choisir Light Kitch?
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
          Notre équipe est composée d’experts de la livraison de plats préparés.
          <br/>
          <br/>
          En choisissant nos services, vous allez augmenter votre chiffre d’affaires et générer de nouveaux canaux de vente.
          <br/>
          <br/>
          Grâce aux services de Light Kitch sur la création et la gestion de restaurants virtuels, les restaurateurs vont récupérer des parts de marché, et du bonus sur les applications de livraison.
          <br/>
          <br/>
          Nous choisir, c’est vous laisser guider et vous laisser aiguiller dans la mise en place d’une stratégie de livraison gagnante
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
           Comment puis-je vous contacter?
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
          Vous pouvez nous envoyer un email à contact@lightkitch.fr ou contacter directement le CEO via le bouton Whatsapp en bas à droite de la page.
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
           Où puis-je faire part de mes suggestions et commentaires?
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            Comme avec nos restaurants partenaires, nous accordons une importance particulière aux avis de chacun. Nous sommes à votre  écoute pour toutes remarques ou questions. Vous pouvez nous contacter par mail à contact@lightkitch.fr
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
           Comment puis-je intégrer votre équipe?
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            Nous sommes ouverts et intéressés pour recruter de nouveaux talents dans le secteur de la Food-Tech.
            Si vous êtes intéressé pour rejoindre l’aventure Light Kitch, vous pouvez nous envoyer un mail à contact@lightkitch.fr
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
           Comment les restaurants partenaires sont-ils rémunérés?
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            Les restaurants partenaires sont rémunérés selon leurs ventes effectuées via leurs restaurants virtuels. Ils reçoivent un   seul paiement et une seule facture détaillée, regroupant toutes les plateformes et comptes créés avec Light Kitch.
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
          Comment récupérer sa tva avec Light Kitch?
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            La TVA appliquée sur les commandes en livraison est une TVA déductible. Vous pouvez récupérer cette TVA lors de la clôture  de votre exercice comptable, elle est calculée selon votre chiffre d’affaires en livraison, et notifiée sur la facture   Light Kitch.
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
           Quel investissement pour commencer mes restaurants virtuels?
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            0€, nous ne vous demandons aucun investissement en début de partenariat, l’essai est gratuit et le partenariat est sans   engagement.
          </AccordionDetails>
        </Accordion>

        <Accordion className='question' >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='question-summary'
          >
           Ai-je besoin de nouveaux ingrédients pour les restaurants virtuels?
          </AccordionSummary>
          <AccordionDetails className='question-infos'>
            Non, nous créons de nouveaux produits avec les ingrédients que vous avez déjà sur place. Vous n’avez également pas besoin   d’acheter de nouvelles machines de production ou de changer vos matières premières pour devenir nos partenaires.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

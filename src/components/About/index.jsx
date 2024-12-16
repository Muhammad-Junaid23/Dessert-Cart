import { useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box width={'100%'} minHeight={'80vh'}>
      <Box m={2}>
        <Typography variant='h2' fontWeight={800}>
          About
        </Typography>
        <Typography>This is About page. In this page you will get the details of Foodie App.</Typography>
      </Box>

      <Box m={2}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus corporis perspiciatis, impedit necessitatibus vero
          inventore ea eaque tempora excepturi itaque perferendis sint debitis voluptatibus odio, quos, autem rem. Sequi eum architecto,
          minus perspiciatis nihil quos vitae in. Soluta, quo eligendi. Eveniet, cum! Ullam suscipit vel, nemo at qui obcaecati totam quos
          dolorem illo a laboriosam quaerat quasi sed quia porro quibusdam nostrum ipsum quam recusandae quis nihil eligendi! Sequi nihil
          magnam exercitationem sed earum necessitatibus cupiditate animi laboriosam facilis enim deserunt aliquam eum, numquam deleniti
          voluptatibus odio totam amet, natus iusto ad placeat perferendis ea eius libero? Delectus, ipsa?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Mollitia maiores excepturi asperiores quis reprehenderit iure laborum. Voluptates unde voluptas enim
          dicta possimus itaque, rem quae corrupti nesciunt animi. Iure assumenda, blanditiis, corrupti quaerat reiciendis neque fuga natus,
          voluptates enim exercitationem mollitia praesentium! Repellat, autem illo adipisci sunt voluptatum porro dicta velit. Consequuntur
          voluptatum ad perspiciatis? Ullam incidunt et quos molestias dignissimos. Fugiat alias recusandae rerum sint eius temporibus,
          excepturi illo deleniti nisi harum ullam sed! Et velit, sunt ullam, quo dolore, labore reprehenderit quae sapiente voluptates
          eligendi vel qui necessitatibus voluptatibus delectus tempora natus deserunt suscipit animi accusamus! Libero non earum cupiditate
          laboriosam a aliquid voluptatum quisquam, aut modi accusantium velit veritatis nulla quasi cum, expedita fuga quaerat quae. Itaque
          eum eveniet, illum cum quam hic delectus beatae libero distinctio expedita, nulla quae aliquid provident? Asperiores odit sit
          quasi deserunt voluptatibus earum esse hic, ex culpa. Nam reiciendis magni, porro aperiam omnis unde facere assumenda dignissimos
          dolores in ipsam ullam, ducimus accusantium? Ipsum corporis impedit quae modi doloribus quidem deleniti omnis alias eaque rerum
          autem provident consequatur iusto, sint sed ea aliquam, quaerat quis odio possimus temporibus iste laboriosam earum. Voluptatum
          minima suscipit adipisci, et eligendi atque obcaecati esse maxime!
        </Typography>
      </Box>
    </Box>
  );
};

export default About;

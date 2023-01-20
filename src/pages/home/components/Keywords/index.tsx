import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';

  const Keywords = () => {
    const theme = useMantineTheme();
  
    return (
      <TextInput
        icon={<IconSearch size={18} stroke={1.5} />}
        radius="xl"
        size="md"
        placeholder="Enter Keywords"
        rightSectionWidth={42}        
      />
    );
  };
  export { Keywords };
  
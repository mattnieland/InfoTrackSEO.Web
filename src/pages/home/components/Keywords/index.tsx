import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

  const Keywords = () => {
  
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
  
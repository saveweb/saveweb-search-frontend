import { Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

type SearchFormData = { keyword?: string; showFull: boolean };

interface SearchFormProps {
  initialData?: SearchFormData;
}

const SearchForm = ({
  initialData = { keyword: undefined, showFull: false },
}: SearchFormProps) => {
  const [form] = Form.useForm<SearchFormData>();
  const navigate = useNavigate();

  return (
    <Form
      form={form}
      layout="inline"
      className="w-full items-center gap-4 justify-center sm:flex-nowrap"
      onFinish={(data) => {
        navigate(`/search?q=${encodeURIComponent(data.keyword || '')}&f=${data.showFull}&p=0`);
      }}
    >
      <Form.Item
        name="keyword"
        className="flex-grow"
        initialValue={initialData.keyword}
      >
        <Input.Search
          size="large"
          enterButton
          placeholder="请输入关键字"
          className="w-full"
          onSearch={(keyword) => {
            if (keyword) {
              form.submit();
            } else {
              navigate('/');
            }
          }}
        />
      </Form.Item>
      <Form.Item
        name="showFull"
        valuePropName="checked"
        initialValue={initialData.showFull}
      >
        <Checkbox className="w-full">展开全文</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;

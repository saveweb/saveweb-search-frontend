import { Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

type SearchFormData = {
  keyword?: string;
  showFull: boolean;
  before2023: boolean;
};

interface SearchFormProps {
  initialData?: SearchFormData;
}

const SearchForm = ({
  initialData = { keyword: undefined, showFull: false, before2023: false },
}: SearchFormProps) => {
  const [form] = Form.useForm<SearchFormData>();
  const navigate = useNavigate();

  return (
    <Form
      form={form}
      layout="inline"
      className="w-full items-center gap-4 justify-center sm:flex-nowrap"
      onFinish={(data) => {
        navigate(
          `/search?q=${encodeURIComponent(data.keyword || '')}&f=${
            data.showFull
          }&b=${data.before2023}&p=0`,
        );
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
      <Form.Item
        name="before2023"
        valuePropName="checked"
        initialValue={initialData.before2023}
      >
        <Checkbox className="w-full">2023年前</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;

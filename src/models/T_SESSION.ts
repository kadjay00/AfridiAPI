import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SESSION', {schema: 'dbo' } )
export class T_SESSION {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'SES_KEY_C',
        })
    public SES_KEY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'SES_TYPE_C',
        })
    public SES_TYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SES_VALUE_N',
        })
    public SES_VALUE_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'SES_CREATIONDATE_DAT',
        })
    public SES_CREATIONDATE_DAT: Date | null;

}

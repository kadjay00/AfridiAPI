import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POS_OPERATORMSG_DETAIL', {schema: 'dbo' } )
export class T_POS_OPERATORMSG_DETAIL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'POD_ID_N',
        })
    public POD_ID_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'POD_LANGUAGECODE_C',
        })
    public POD_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 80,
        name: 'POD_TITLE_C',
        })
    public POD_TITLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2048,
        name: 'POD_MESSAGE_C',
        })
    public POD_MESSAGE_C: string | null;

}

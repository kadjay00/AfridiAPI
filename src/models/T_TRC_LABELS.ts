import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRC_LABELS', {schema: 'dbo' } )
export class T_TRC_LABELS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TLB_LABELID_N',
        })
    public TLB_LABELID_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'TLB_LABELLANG_C',
        })
    public TLB_LABELLANG_C: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'TLB_LABEL_DESC_C',
        })
    public TLB_LABEL_DESC_C: string;

    @Column('char', {
        nullable: false,
        name: 'TLB_DELCODE_C',
        })
    public TLB_DELCODE_C: string;

}

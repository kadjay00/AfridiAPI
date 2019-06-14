import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LABEL_QUANTITY', {schema: 'dbo' } )
export class T_LABEL_QUANTITY {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'QTE_IDENTITY_N',
        })
    public QTE_IDENTITY_N: number;

    @Column('int', {
        nullable: true,
        name: 'QTE_LABELQTE_N',
        })
    public QTE_LABELQTE_N: number | null;

}
